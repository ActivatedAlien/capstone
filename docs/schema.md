# Schema Information

## forums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
forum_id    | integer   | not null, foreign key (references threads)
title       | string    | not null
body        | string    | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
time        | datetime  | not null
num_slots   | integer   | not null
address     | string    | not null
description | string    |

## signups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id    | integer   | not null, foreign key (references events)
attendee_id | integer   | not null, foreign key (references users)

## invites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
invitee_id  | integer   | not null, foreign key (references users)
event_id    | integer   | not null, foreign key (references events)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
