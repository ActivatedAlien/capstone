class CreateSignups < ActiveRecord::Migration
  def change
    create_table :signups do |t|
      t.integer :event_id, null: false
      t.integer :attendee_id, null: false
      t.timestamps null: false
    end

    add_index :signups, :event_id
    add_index :signups, :attendee_id
  end
end
