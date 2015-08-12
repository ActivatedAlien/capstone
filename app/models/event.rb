class Event < ActiveRecord::Base
  validates :owner, :time, :num_slots, :address, presence: true

  belongs_to :owner, foreign_key: :owner_id, class_name: "User"

  has_many :invites
  has_many :invitees, through: :invites

  has_many :signups
  has_many :attendees, through: :signups
end
