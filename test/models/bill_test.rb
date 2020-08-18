# == Schema Information
#
# Table name: bills
#
#  id             :bigint           not null, primary key
#  description    :string           not null
#  category       :string           not null
#  amount         :integer          not null
#  split          :string           not null
#  author_id      :integer          not null
#  pay_partner_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
