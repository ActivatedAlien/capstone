# Phase 2: Viewing Events/Posts

## Rails
### Models

### Controllers
Api::EventsController (index, show)
Api::ThreadsController (index, show)

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
* PostForm

## Gems/Libraries
