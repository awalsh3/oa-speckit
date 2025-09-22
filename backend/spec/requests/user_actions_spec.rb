# frozen_string_literal: true

require 'rails_helper'

describe 'POST /user-actions', type: :request do
  it 'marks an action as completed (contract test)' do
    user = User.create!(email: 'test@example.com', password_hash: 'hashedpw')
    hashtag = Hashtag.create!(text: '#Test', description: 'Test hashtag', trend_score: 1)
    resource = Resource.create!(hashtag: hashtag, type: 'petition', title: 'Test Petition', url: 'https://example.com', description: 'A test resource', status: 'active')
    post '/user-actions', params: { user_id: user.id, resource_id: resource.id }
    expect(response).to have_http_status(:created)
    expect(response.content_type).to eq('application/json; charset=utf-8')
    json = JSON.parse(response.body)
    expect(json).to include('id', 'user_id', 'resource_id', 'completed_at')
    expect(json['user_id']).to eq(user.id)
    expect(json['resource_id']).to eq(resource.id)
  end
end
