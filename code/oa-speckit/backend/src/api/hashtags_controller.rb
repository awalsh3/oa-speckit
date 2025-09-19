# app/controllers/hashtags_controller.rb
class HashtagsController < ApplicationController
  def index
    hashtags = Hashtag.all
    render json: hashtags.as_json(include: :resources)
  end

  def show
    hashtag = Hashtag.find(params[:id])
    render json: hashtag.as_json(include: :resources)
  end
end
