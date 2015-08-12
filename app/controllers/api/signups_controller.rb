class Api::SignupsController < ApplicationController
  def create
    @signup = Signup.new(signup_params)
    @signup.register_user(current_user)

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

  private
  def signup_params
    params.require(:signup).permit(:event_id)
  end
end
