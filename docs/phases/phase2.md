# Phase 2: Viewing Events/Posts

## Rails
### Models

### Controllers
Api::EventsController (index, show)
Api::ForumsController (index, show)

### Views
* events/show.json.jbuilder
* forums/show.json.jbuilder

## Backbone
### Models
* Event
* Forum (parses nested `posts` association)
* Post

### Collections
* Events
* Forums
* Posts

### Views
* EventShow
* EventsIndex
* ForumForm
* ForumShow (composite view, contains PostShow subview)
* PostShow
* PostForm

## Gems/Libraries
