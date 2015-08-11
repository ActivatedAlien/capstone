class Forum < ActiveRecord::Base
  validates :author, :title, presence: true

  belongs_to :author, foreign_key: :author_id, class_name: "User"
  has_many :posts
end
