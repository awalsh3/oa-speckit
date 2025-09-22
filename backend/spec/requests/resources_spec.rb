# frozen_string_literal: true

require 'rails_helper'

describe 'GET /resources/:id', type: :request do
  it 'returns resource details (contract test)' do
    hashtag = Hashtag.create!(text: '#Test', description: 'Test hashtag', trend_score: 1)
    resource = Resource.create!(hashtag: hashtag, type: 'petition', title: 'Test Petition', url: 'https://example.com', description: 'A test resource', status: 'active')
    get "/resources/#{resource.id}"
    expect(response).to have_http_status(:ok)
    expect(response.content_type).to eq('application/json; charset=utf-8')
    json = JSON.parse(response.body)
    expect(json).to include('id', 'type', 'title', 'url', 'description', 'status')
    expect(json['id']).to eq(resource.id)
  end
end
