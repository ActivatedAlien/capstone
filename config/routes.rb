Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :events, only: [:create, :index, :show, :destroy]
  resources :forums, only: [:create, :index,: :show, :destroy]
  resources :posts, only: [:create, :destroy]
end
