# frozen_string_literal: true
require 'rails_helper'

describe 'GET /hashtags/:id', type: :request do
  it 'returns hashtag details (contract test)' do
    hashtag = Hashtag.create!(text: '#Test', description: 'Test hashtag', trend_score: 1)
    get "/hashtags/#{hashtag.id}"
    expect(response).to have_http_status(:ok)
    expect(response.content_type).to eq('application/json; charset=utf-8')
    json = JSON.parse(response.body)
    expect(json).to include('id', 'text', 'description', 'resources', 'trend_score')
    expect(json['id']).to eq(hashtag.id)
  end
end
