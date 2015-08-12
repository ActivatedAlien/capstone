class Signup < ActiveRecord::Base
  validates :attendee, :event, presence: true
  validates_uniqueness_of :event_id, :scope => :attendee_id

  belongs_to :event
  belongs_to :attendee, foreign_key: :attendee_id, class_name: "User"

  def register_user
    self.attendee_id = current_user.id
    invite = Invite.find_by_event_id_and_invitee_id(self.event.id, self.attendee_id)
    invite.destroy! if invite
  end
end
