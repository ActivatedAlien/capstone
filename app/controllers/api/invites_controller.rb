class Api::InvitesController < ApplicationController
  def create
    @invite = Invite.new(invite_params)
    @invite.set_invitee(User.find_by_username(params[:username]))

    if @invite.save
      render json: @invite
    else
      render :json => { error: "could not save" }, status: :unprocessable_entity
    end
  end

  def destroy
    @invite = Invite.find(params[:id])
    @invite.destroy!
    render json: @invite
  end

  private
  def invite_params
    params.require(:invite).permit(:event_id)
  end
end
