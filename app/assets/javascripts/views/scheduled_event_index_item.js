CapstoneProject.Views.ScheduledEventIndexItem = Backbone.View.extend({
  template: JST['scheduled_event_index_item'],

  attributes: {
    className: "list-group",
  },

  render: function() {
    this.$el.html(this.template({ event: this.model }));
    return this;
  }

});
