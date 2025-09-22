# app/models/resource.rb
class Resource < ApplicationRecord
  belongs_to :hashtag
  validates :type, :title, :url, :description, :status, presence: true
  validates :url, format: URI.regexp(%w[http https])
  validates :status, inclusion: { in: %w[active broken] }
end
