class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ['user not found'], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.switch_to_registered_friend
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  private 
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
