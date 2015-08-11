Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :events, only: [:create, :index, :show, :destroy]
    resources :forums, only: [:create, :index, :show, :destroy]
    resources :posts, only: [:create, :destroy]
  end

  root to: "static_pages#index"
end
