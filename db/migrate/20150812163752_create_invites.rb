class CreateInvites < ActiveRecord::Migration
  def change
    create_table :invites do |t|
      t.integer :invitee_id, null: false
      t.integer :event_id, null: false
      t.timestamps null: false
    end

    add_index :invites, :invitee_id
    add_index :invites, :event_id
  end
end
