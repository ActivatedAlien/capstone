class CreateForums < ActiveRecord::Migration
  def change
    create_table :forums do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.timestamps null: false
    end

    add_index :forums, :author_id
  end
end
