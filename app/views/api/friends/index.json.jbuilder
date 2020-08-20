json.array! @friends do |friend|
  if friend.registered
    json.partial! friend, user: :friend
  else
    json.extract! friend, :id, :email, :registered
  end
end