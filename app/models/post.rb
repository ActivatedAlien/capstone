class Post < ActiveRecord::Base
  validates :author, :forum, :title, :body, presence: true

  belongs_to :author, foreign_key: :author_id, class_name: "User"
  belongs_to :forum
end
