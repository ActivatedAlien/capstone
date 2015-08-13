class Invite < ActiveRecord::Base
  validates :invitee, :event, presence: true
  validates_uniqueness_of :event_id, :scope => :invitee_id

  belongs_to :event
  belongs_to :invitee, foreign_key: :invitee_id, class_name: "User"

  def set_invitee(invitee)
    self.invitee_id = invitee.id
  end
end
