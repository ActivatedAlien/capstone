json.extract! @forum, :id, :title, :created_at, :updated_at

json.posts @forum.posts do |post|
  json.extract! post, :id, :author_id, :forum_id, :title, :body, :created_at, :updated_at
end
