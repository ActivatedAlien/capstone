CapstoneProject.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.events = new CapstoneProject.Collections.Events();
  },

  routes: {
    "": "eventIndex",
    "forum/:id": "forumShow",
    "event/:id": "eventShow"
  },

  eventIndex: function() {
    this.events.fetch();
    var view = new CapstoneProject.Views.EventIndex({ collection: this.events });
    this._swapView(view);
  },

  forumShow: function(id) {

  },

  eventShow: function(id) {

  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }
});
