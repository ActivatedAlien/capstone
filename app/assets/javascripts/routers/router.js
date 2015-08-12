CapstoneProject.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.scheduledEvents = options.scheduledEvents;
    this.pendingEvents = options.pendingEvents;
    this.forums = options.forums;
  },

  routes: {
    "": "eventIndex",
    "forums": "forumIndex",
    "forums/:id": "forumShow",
    "events/:id": "eventShow",
  },

  eventIndex: function() {
    this.scheduledEvents.fetch({ data: { type: "scheduled" }});
    this.pendingEvents.fetch({ data: { type: "pending" }});

    var view = new CapstoneProject.Views.EventIndex({
      scheduledEvents: this.scheduledEvents,
      pendingEvents: this.pendingEvents
    });
    this._swapView(view);
  },

  forumIndex: function() {
    this.forums.fetch();
    var view = new CapstoneProject.Views.ForumIndex({ collection: this.forums });
    this._swapView(view);
  },

  forumShow: function(id) {
    var forum = this.forums.getOrFetch(id);
    var view = new CapstoneProject.Views.ForumShow({ model: forum });
    this._swapView(view);
  },

  eventShow: function(id) {
    var event = this.scheduledEvents.getOrFetch(id) || this.pendingEvents.getOrFetch(id);
    var view = new CapstoneProject.Views.EventShow({ model: event });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }
});
