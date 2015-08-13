json.extract! @event, :id, :address, :description, :num_slots, :time

json.attendees @event.attendees do |user|
  json.extract! user, :id, :username
end
