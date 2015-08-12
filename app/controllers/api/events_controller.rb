class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.register_user

    if @event.save
      render json: @event
    else
      render :json => { error: "could not save" }, status: :unprocessable_entity
    end
  end

  def index
    @events = params[:type] == "scheduled" ? current_user.scheduled_events : current_user.pending_events
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
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
