class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.register_user_and_set_time(current_user, event_params[:time])

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

  def destroy
    @event = Event.find(params[:id])
    @event.destroy!
    render json: @event
  end

  private
  def event_params
    params.require(:event).permit(:time, :num_slots, :address, :description)
  end
end
