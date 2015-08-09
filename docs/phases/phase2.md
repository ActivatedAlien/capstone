# Phase 2: Viewing Events/Posts

## Rails
### Models

### Controllers
Api::EventsController (create, destroy, index, show)
Api::ThreadsController (create, destroy, index, show)
Api::PostsController (create, destroy)

### Views
* events/show.json.jbuilder
* threads/show.json.jbuilder

## Backbone
### Models
* Event
* Thread (parses nested `posts` association)
* Post

### Collections
* Events
* Threads
* Posts

### Views
* EventShow
* EventsIndex
* ThreadForm
* ThreadShow (composite view, contains PostShow subview)
* PostShow

## Gems/Libraries
