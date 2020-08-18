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
  validates :description, :category, :amount, :split, presence: true
  validates :author_id, :pay_partner_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :pay_partner,
  primary_key: :id,
  foreign_key: :pay_partner_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :bill_id,
  class_name: :Comment
end
