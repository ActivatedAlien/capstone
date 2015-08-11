class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :owner_id, null: false
      t.datetime :time, null: false
      t.integer :num_slots, null: false
      t.string :address, null: false
      t.string :description
      t.timestamps null: false
    end

    add_index :events, :owner_id
  end
end
