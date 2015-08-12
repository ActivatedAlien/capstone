class Signup < ActiveRecord::Base
  validates :attendee, :event, presence: true

  belongs_to :event
  belongs_to :attendee, foreign_key: :attendee_id, class_name: "User"
end
