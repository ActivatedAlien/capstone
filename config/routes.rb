Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :events, only: [:create, :show, :index, :destroy]
    resources :forums, only: [:create, :index, :show, :destroy]
    resources :posts, only: [:create, :destroy]
    resources :invites, only: [:create, :destroy]
    resources :signups, only: [:create, :destroy]
  end

  root to: "static_pages#index"
end
