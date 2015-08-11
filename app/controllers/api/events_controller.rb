class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    else
      render :json => { error: "could not save" }, status: :unprocessable_entity
    end
  end

  def index
    @events = current_user.events
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
    params.require(:event).permit(:owner_id, :time, :num_slots, :address, :description)
  end
end