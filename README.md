# Mafia with Strangers

[Heroku link][heroku]

[heroku]: https://mafiawithstrangers.herokuapp.com/

## Minimum Viable Product
Mafia with Strangers brings together strangers for great games of Mafia. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create Mafia events
- [ ] Search for events
- [x] Sign up for events
- [x] Invite other users to events
- [ ] Edit events, notifying users signed up for that event
- [x] Post to threads in a forum

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Event/Thread/Post Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create events and make
posts on a forum thread using a simple text form in a Rails view. The most important
part of this phase will be pushing the app to Heroku and ensuring that everything
works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing Events/Posts (~2 days)
I will add API routes to serve event/thread/post data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create and view events/threads/posts, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing and Displaying Events/Posts (~2 days)
I plan to use third-party libraries to add functionality to the `PostForm` and
`PostsIndex` views in this phase. First I'll need to add a Markdown editor to the
`PostsIndex`, and make sure that the Markdown is properly escaped and formatted in
the `PostShow` view. I also plan to integrate Filepicker for file upload so
users can add images to posts.

[Details][phase-three]

### Phase 4: Inviting Users, Signing Up for Events, and Editing Events (2-3 days)
I will use ActionMailer to send emails to users when the creator of an event
edits/destroys it. I will create a User Show page that will contain a list of the
events a user is currently signed up for, and a list of pending invitations.

[Details][phase-four]

### Phase 5: Google Maps API, Searching for Events (>2 days)
I will research the Google Maps API and use it to enable users to (1) set the location of an
event by searching on a map, and (2) search for existing events with the help of
a map. I expect this to be a lot of trial and error.
In the remaining time, I will use CSS to prettify the website and improve
the user experience, e.g. with Responsive Design.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] View pages containing information on different setups
- [ ] Upload details of past games
- [ ] Comment on games
- [ ] Upload photos from events
- [ ] Search for games
- [ ] Search for posts

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

# capstone
