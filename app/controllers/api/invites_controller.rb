class Api::InvitesController < ApplicationController
  def create
    @invite = Invite.new(invite_params)
    @invite.invitee_id = current_user.id

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
    params.require(:invite).permit(:invitee_id, :event_id)
  end
end
