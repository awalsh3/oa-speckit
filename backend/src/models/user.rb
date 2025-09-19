# app/models/user.rb
class User < ApplicationRecord
  has_many :user_actions
  validates :email, presence: true, uniqueness: true
  validates :password_hash, presence: true
end
