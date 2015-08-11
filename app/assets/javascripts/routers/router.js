CapstoneProject.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.events = new CapstoneProject.Collections.Events();
    this.forums = new CapstoneProject.Collections.Forums();
  },

  routes: {
    "": "eventIndex",
    "forums": "forumIndex",
    "forums/:id": "forumShow",
    "events/:id": "eventShow",
  },

  eventIndex: function() {
    this.events.fetch();
    var view = new CapstoneProject.Views.EventIndex({ collection: this.events });
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
    var event = this.events.getOrFetch(id);
    var view = new CapstoneProject.Views.EventShow({ model: event });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }
});
