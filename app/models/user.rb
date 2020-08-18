# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password
  after_initialize :ensure_session_token!

  has_many :friend_lists,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Friend

  has_many :user_lists,
  primary_key: :id,
  foreign_key: :friend_id,
  class_name: :Friend

  has_many :friends,
  through: :friend_lists,
  source: :friend

  has_many :frienders,
  through: :user_lists,
  source: :friender

  has_many :bills,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Bill

  has_many :co_bills,
  primary_key: :id,
  foreign_key: :pay_partner_id,
  class_name: :Bill

  has_many :pay_partners, 
  through: :bills,
  source: :pay_partner

  has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Comment

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64 
    self.save
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
