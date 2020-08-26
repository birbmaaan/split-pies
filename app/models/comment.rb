# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  content    :string           not null
#  author_id  :integer          not null
#  bill_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
  validates :content, :author_id, :bill_id, presence: true

  belongs_to :bill,
  primary_key: :id,
  foreign_key: :bill_id,
  class_name: :Bill

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User
end
