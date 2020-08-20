# == Schema Information
#
# Table name: friends
#
#  id                :bigint           not null, primary key
#  user_id           :integer          not null
#  friend_id         :integer
#  pending           :boolean          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  invited_friend_id :integer
#
class Friend < ApplicationRecord
  validates :user_id, presence: true
  validates :pending, inclusion: {in: [true, false]}

  belongs_to :friender,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :friend,
  primary_key: :id,
  foreign_key: :friend_id,
  class_name: :User

  def self.confirm_friends(user, friend, pending)
    pending_request = Friend.new({user_id: user.id, friend_id: friend.id, pending: pending})
    pending_request2 = Friend.new({user_id: friend.id, friend_id: user.id, pending: pending})
    pending_request.save!
    pending_request2.save!
    pending_request
  end
end
