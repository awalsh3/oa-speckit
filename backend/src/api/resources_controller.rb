# app/controllers/resources_controller.rb
class ResourcesController < ApplicationController
  def show
    resource = Resource.find(params[:id])
    render json: resource
  end
end
