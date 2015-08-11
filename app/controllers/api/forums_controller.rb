class Api::ForumsController < ApplicationController
  def create
    @forum = Forum.new(forum_params)
    if @forum.save
      render json: @forum
    else
      render :json => { error: "could not save" }, status: :unprocessable_entity
    end
  end

  def index
    @forums = Forum.all
    render json: @forums
  end

  def show
    @forum = Forum.find(params[:id])
    render :show
  end

  def destroy
    @forum = Forum.find(params[:id])
    @forum.destroy!
    render json: @forum
  end

  private
  def forum_params
    params.require(:forum).permit(:author_id, :title)
  end
end
