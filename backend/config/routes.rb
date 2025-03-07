Rails.application.routes.draw do
  namespace :api do
    post 'validate_click', to: 'validate_click#create'
  end
  get "/", to: proc { [200, {}, ["OK"]] }
end
