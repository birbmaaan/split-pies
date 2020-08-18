# == Schema Information
#
# Table name: friends
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  pending    :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friend < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates :pending, presence: true, inclusion: [in: [true, false]]

  belongs_to :friender,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :friend,
  primary_key: :id,
  foreign_key: :friend_id,
  class_name: :User
end
