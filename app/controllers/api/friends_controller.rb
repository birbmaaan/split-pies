class Api::FriendsController < ApplicationController
  def index
    user = User.find_by(id: params[:userId])
    @friends = user.friends_on_list
    render :index
  end

  def create
    user = User.find_by(id: params[:friendInfo][:userId])
    friend = User.find_by(email: params[:friendInfo][:email])

    if friend
      if user.friends.include?(friend)
        @friend = friend
      else
        friend.registered == false ? pending = true : pending = false
        new_friend = Friend.confirm_friends(user, friend, pending)
        @friend = User.find_by(id: new_friend.friend_id)
      end
    else
      invited_friend = User.create_temp_user(params[:friendInfo][:email])
      new_friend = Friend.confirm_friends(user, invited_friend, true)
      @friend = User.find_by(id: new_friend.friend_id)
    end
    
    render :show
  end

  def show
    @friend = Friend.find_by(id: params[:friendId])
    render :show
  end

  def destroy
    @friend = Friend.find_by(id: params[:friendId])
    if @friend
      other_friend = Friend.all.where(user_id: @friend.friend_id).where(friend_id: @friend.user_id)
      @friend.destroy
      other_friend.first.destroy
      render :show
    else
      render json: ["Friend not found"], status: 404
    end
  end
end
