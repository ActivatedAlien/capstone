class Api::SignupsController < ApplicationController
  def create
    @signup = Signup.new(params[:event_id])
    @signup.register_user

    if @signup.save
      render json: @signup
    else
      render :json => { error: "could not save" }, status: :unprocessable_entity
    end
  end

  def destroy
    @signup = Signup.find(params[:id])
    @signup.destroy!
    render json: @signup
  end
end
