class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :forum_id, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.timestamps null: false
    end

    add_index :posts, :author_id
    add_index :posts, :forum_id
  end
end
