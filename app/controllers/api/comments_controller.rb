class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render :index
  end

  def show
    @comment = Comment.find_by(id: params[:commentId])
    if @comment
      render :show
    else
      render json: ['comment not found'], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 402
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:commentId])
    if @comment
      @comment.destroy
      render :show
    else
      render json: ['comment not found'], status: 404;
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :author_id, :bill_id)
  end
end
