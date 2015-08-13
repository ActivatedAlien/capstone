CapstoneProject.Views.EventForm = Backbone.View.extend({
  template: JST['event_form'],
  events: {
    "submit form": "saveEvent"
  },

  initialize: function(options) {
    this.scheduledEvents = options.scheduledEvents;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({ event: this.model }));
    return this;
  },

  saveEvent: function(triggerEvent) {
    triggerEvent.preventDefault();
    var attrs = $(triggerEvent.currentTarget).serializeJSON().event;
    var event = this.model, events = this.scheduledEvents;
    event.set(attrs);

    event.save({}, {
      success: function() {
        events.add(event);
      }
    });
  }
});
