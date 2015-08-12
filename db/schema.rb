# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150812163752) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.datetime "time",        null: false
    t.integer  "num_slots",   null: false
    t.string   "address",     null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "events", ["owner_id"], name: "index_events_on_owner_id", using: :btree

  create_table "forums", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "forums", ["author_id"], name: "index_forums_on_author_id", using: :btree

  create_table "invites", force: :cascade do |t|
    t.integer  "invitee_id", null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "invites", ["event_id"], name: "index_invites_on_event_id", using: :btree
  add_index "invites", ["invitee_id"], name: "index_invites_on_invitee_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "forum_id",   null: false
    t.string   "title",      null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree
  add_index "posts", ["forum_id"], name: "index_posts_on_forum_id", using: :btree

  create_table "signups", force: :cascade do |t|
    t.integer  "event_id",    null: false
    t.integer  "attendee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "signups", ["attendee_id"], name: "index_signups_on_attendee_id", using: :btree
  add_index "signups", ["event_id"], name: "index_signups_on_event_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
