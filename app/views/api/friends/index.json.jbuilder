@friends.each do |friend|
  json.set! friend.id do
    json.extract! friend, :id, :user_id, :friend_id, :pending
  end
end