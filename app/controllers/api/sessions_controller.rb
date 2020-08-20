class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: ["Incorrect email or password"], status: 401
    end
  end

  def destroy
    
    if logged_in?
      logout_user!
      render json: {}
    else
      render json: ["You're already logged out"], status: 404
    end
  end
end
