class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.register_user(current_user)

    if @event.save
      @event.auto_signup
      render json: @event
    else
      render :json => { error: "could not save" }, status: :unprocessable_entity
    end
  end

  def index
    @events = params[:type] == "scheduled" ?
              current_user.scheduled_events : current_user.pending_events
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def update
    @event = Event.find(params[:id])

    if @event.update_attributes(event_params)
      render json: @event
    else
      render :json => { error: "could not update" }, status: :unprocessable_entity
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy!
    render json: @event
  end

  private
  def event_params
    event_params = params.require(:event).permit(:time, :num_slots, :address, :description)
    if event_params[:time]
      event_params[:time] = DateTime.strptime(params[:event][:time], "%m/%d/%Y %H:%M %p")
    end
    event_params
  end
end
