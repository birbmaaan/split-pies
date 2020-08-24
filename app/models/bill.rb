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
class Bill < ApplicationRecord
  validates :description, :category, :amount, presence: true
  validates :partner_one_id, :partner_two_id, :partner_one_paid_share, :partner_two_paid_share, presence: true
  validates :partner_one_owed_share, :partner_two_owed_share, presence: true
  validates :split_equally, :paid_up, inclusion: {in: [true, false]}

  belongs_to :partner_one,
  primary_key: :id,
  foreign_key: :partner_one_id,
  class_name: :User

  belongs_to :partner_two,
  primary_key: :id,
  foreign_key: :partner_two_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :bill_id,
  class_name: :Comment
end
