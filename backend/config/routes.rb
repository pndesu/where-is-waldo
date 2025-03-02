Rails.application.routes.draw do
  namespace :api do
    post 'validate_click', to: 'validate_click#create'
  end
end
