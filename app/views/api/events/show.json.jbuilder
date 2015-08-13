json.extract! @event, :id, :address, :description, :num_slots, :time

json.owner do
  json.extract! @event.owner, :id, :username
end

json.attendees @event.attendees do |user|
  json.extract! user, :id, :username
end

json.invitees @event.invitees do |user|
  json.extract! user, :id, :username
end
