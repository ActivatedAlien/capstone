class Event < ActiveRecord::Base
  validates :owner, :time, :num_slots, :address, presence: true

  belongs_to :owner, foreign_key: :owner_id, class_name: "User"
end
