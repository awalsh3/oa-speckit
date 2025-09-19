# app/models/hashtag.rb
class Hashtag < ApplicationRecord
  has_many :resources
  validates :text, presence: true, uniqueness: true
  validates :description, presence: true
  validates :trend_score, numericality: true
end
