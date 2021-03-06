Rails.application.routes.draw do
  resources :recipes
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users do
    resources :favorites
  end
  resources :favorites, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
