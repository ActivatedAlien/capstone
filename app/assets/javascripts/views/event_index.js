CapstoneProject.Views.EventIndex = Backbone.CompositeView.extend({
    template: JST['event_index'],

    initialize: function(options) {
      this.scheduledEvents = options.scheduledEvents;
      this.pendingEvents = options.pendingEvents;
      this.listenTo(this.scheduledEvents, "sync add remove", this.render);
      this.listenTo(this.pendingEvents, "sync add remove", this.render);
      this.listenTo(this.pendingEvents, "signup", this.handleSignup);
      this.listenTo(this.pendingEvents, "decline-signup", this.declineSignup);
    },

    handleSignup: function(signup) {
      var event = this.pendingEvents.get(signup.get('event_id'));
      this.scheduledEvents.add(event);
      this.pendingEvents.remove(event);
    },

    declineSignup: function(signup) {
      var event = this.pendingEvents.get(signup.get('event_id'));
      this.pendingEvents.remove(event);
      signup.destroy;
    },

    render: function() {
      var view = this;
      this.$el.html(this.template());
      this.scheduledEvents.each(function(event) {
        var subView = new CapstoneProject.Views.ScheduledEventIndexItem({ model: event });
        view.addSubview(".scheduled-events", subView);
      });

      this.pendingEvents.each(function(event) {
        var subView = new CapstoneProject.Views.PendingEventIndexItem({ model: event });
        view.addSubview(".pending-events", subView);
      });

      var formView = new CapstoneProject.Views.EventForm({
        scheduledEvents: this.scheduledEvents,
        model: new CapstoneProject.Models.Event() }
      );
      view.addSubview(".new-event", formView);

      return this;
    }
});
