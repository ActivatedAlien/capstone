class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :posts, foreign_key: :author_id
  has_many :events, foreign_key: :owner_id
  has_many :forums, foreign_key: :author_id

  has_many :invites, foreign_key: :invitee_id, class_name: "Invite"
  has_many :pending_events, through: :invites, source: :event

  has_many :signups, foreign_key: :attendee_id, class_name: "Signup"
  has_many :scheduled_events, through: :signups, source: :event

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def verify_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.verify_password?(password) ? user : nil
  end
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end
end
