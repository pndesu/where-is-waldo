# app/controllers/api/validate_click_controller.rb
module Api
  class ValidateClickController < ApplicationController
    before_action :set_cors_headers

    def set_cors_headers
      response.set_header("Access-Control-Allow-Origin", "https://where-is-waldo-phi.vercel.app")
      response.set_header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD")
      response.set_header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")
    end
    
    def create
      x = params[:x].to_f
      y = params[:y].to_f
      character_found = Character.all.find { |character| within_bounds?(x, y, character) }
      
      if character_found
        render json: { result: true, name: character_found.name, message: "You found #{character_found.name}!" }
      else
        render json: { result: false, message: "Try again." }
      end
    end

    private

    def within_bounds?(x, y, character)
      center_x = character.x + character.width / 2.0
      center_y = character.y + character.height / 2.0
      
      # Define the square size (1.5x the larger dimension for usability)
      size = [character.width, character.height].max * 1.5
      half_size = size / 2.0
      
      # Check if the click is within the square boundaries
      x >= center_x - half_size &&
      x <= center_x + half_size &&
      y >= center_y - half_size &&
      y <= center_y + half_size
    end
  end
end