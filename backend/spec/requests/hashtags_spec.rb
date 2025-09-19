# frozen_string_literal: true
require 'rails_helper'

describe 'GET /hashtags', type: :request do
  it 'returns a list of hashtags (contract test)' do
    get '/hashtags'
    expect(response).to have_http_status(:ok)
    expect(response.content_type).to eq('application/json; charset=utf-8')
    json = JSON.parse(response.body)
    expect(json).to be_an(Array)
    # Contract: Each hashtag must have id, text, description, resources, trend_score
    json.each do |hashtag|
      expect(hashtag).to include('id', 'text', 'description', 'resources', 'trend_score')
    end
  end
end
