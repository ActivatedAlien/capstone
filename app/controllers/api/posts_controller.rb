class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render json: @post
    else
      render :json => { error: "could not save" }, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    render json: @post
  end

  private
  def post_params
    params.require(:post).permit(:author_id, :forum_id, :title, :body)
  end
end
