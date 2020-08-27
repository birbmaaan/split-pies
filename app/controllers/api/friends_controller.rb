class Api::FriendsController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @friends = user.friends_on_list
    render :index
  end

  def create
    user = User.find_by(id: params[:friendInfo][:userId])
    friend = User.find_by(email: params[:friendInfo][:email])
    @friend = nil
    if friend
      if user.friends.include?(friend)
         user.friends_on_list.each do |friend_assoc|
          if friend_assoc.friend_id == friend.id
            @friend = friend_assoc
            break
          end
         end
         render :show
      else
        friend.registered == false ? pending = true : pending = false
        @friend = Friend.confirm_friends(user, friend, pending)
        render :show
      end
    else
      invited_friend = User.create_temp_user(params[:friendInfo][:email])
      if invited_friend == ["Please enter a valid email address"] 
        render json: invited_friend, status: 401        
      else
        @friend = Friend.confirm_friends(user, invited_friend, true)
        render :show
      end
    end
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
