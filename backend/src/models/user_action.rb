# app/models/user_action.rb
class UserAction < ApplicationRecord
  belongs_to :user
  belongs_to :resource
  validates :completed_at, presence: true
end
