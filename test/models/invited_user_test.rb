# == Schema Information
#
# Table name: invited_users
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class InvitedUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
