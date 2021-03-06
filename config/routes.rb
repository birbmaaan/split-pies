Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:index, :create, :destroy, :show]
    resources :bills, only: [:show, :index, :create, :destroy, :update]
    resources :comments, only: [:show, :index, :create, :destroy]
  end

  root to: 'static_pages#root'
end
