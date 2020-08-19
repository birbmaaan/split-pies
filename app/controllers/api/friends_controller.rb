class Api::FriendsController < ApplicationController
  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      render `/api/users/#{@friend.user_id}`
    else
      render json: @friend.errors.full_messages, status: 404
    end
  end

  def delete
    @friend = Friend.find_by(id: params[:id])
    if @friend
      @friend.destroy
      render `/api/users/#{@friend.user_id}`
    else
      render json: ["Friend not found"], status: 404
    end
  end

  private
  def friend_params
    params.require(:friend).permit(:user_id, :friend_id, :pending)
  end
end
