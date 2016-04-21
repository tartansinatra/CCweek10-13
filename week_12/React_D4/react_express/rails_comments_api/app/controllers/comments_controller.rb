class CommentsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index
    comments = Comment.all
    render :json => comments.to_json()
  end

  def create
    Comment.create(comment_params)
    comments = Comment.all
    render :json => comments.to_json()
  end

  def comment_params
    params.require(:comment).permit(:text, :author)
  end

end
