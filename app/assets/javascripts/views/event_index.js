CapstoneProject.Views.EventIndex = Backbone.CompositeView.extend({
    template: JST['event_index'],
    events: {
    },

    initialize: function(options) {
      this.scheduledEvents = options.scheduledEvents;
      this.pendingEvents = options.pendingEvents;
      this.listenTo(this.scheduledEvents, "sync", this.render);
      this.listenTo(this.pendingEvents, "sync", this.render);
    },

    render: function() {
      var view = this;
      this.$el.html(this.template());
      this.scheduledEvents.each(function(event) {
        var subView = new CapstoneProject.Views.EventIndexItem({ model: event });
        view.addSubview(".scheduled-events", subView);
      });

      this.pendingEvents.each(function(event) {
        var subView = new CapstoneProject.Views.EventIndexItem({ model: event });
        view.addSubview(".pending-events", subView);
      });

      return this;
    }
});
