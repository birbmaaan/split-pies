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
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :name, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :registered, inclusion: {in: [true, false]}
  attr_reader :password
  after_initialize :ensure_session_token!

  has_many :friends_on_list,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Friend

  has_many :friends_of,
  primary_key: :id,
  foreign_key: :friend_id,
  class_name: :Friend

  has_many :friends,
  through: :friends_of,
  source: :friender

  has_many :frienders,
  through: :friends_on_list,
  source: :friend

  has_many :bills,
  primary_key: :id,
  foreign_key: :partner_one_id,
  class_name: :Bill

  has_many :co_bills,
  primary_key: :id,
  foreign_key: :partner_two_id,
  class_name: :Bill

  has_many :pay_partners, 
  through: :bills,
  source: :pay_partner

  has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Comment

  def self.create_temp_user(email)
    temp_password = SecureRandom.urlsafe_base64
    name = email.split('@').first
    temp_user = User.new({name: name, email: email, registered: false, password: temp_password})
    if temp_user.save
      return temp_user
    else
      return ["Please enter a valid email address"]
    end
  end

  def switch_to_registered_friend
    self.friends_on_list.each do |friend|
      friend.pending = false
      other_user = User.find_by(id: friend.friend_id)
      pending_request = other_user.friends_on_list.find_by(friend_id: friend.user_id)
      pending_request.pending = false
      pending_request.save!
      friend.save!
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
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
