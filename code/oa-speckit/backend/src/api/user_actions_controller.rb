# app/controllers/user_actions_controller.rb
class UserActionsController < ApplicationController
  def create
    user_action = UserAction.create!(
      user_id: params[:user_id],
      resource_id: params[:resource_id],
      completed_at: Time.now
    )
    render json: user_action, status: :created
  end
end
