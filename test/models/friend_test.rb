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
require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
