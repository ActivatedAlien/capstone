class Event < ActiveRecord::Base
  validates :owner, :time, :num_slots, :address, presence: true

  belongs_to :owner, foreign_key: :owner_id, class_name: "User"

  has_many :invites
  has_many :invitees, through: :invites

  has_many :signups
  has_many :attendees, through: :signups

  def register_user
    self.owner_id = current_user.id
    Signup.create(event_id: self.id, attendee_id: self.owner_id)
  end
end
