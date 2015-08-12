CapstoneProject.Views.EventShow = Backbone.View.extend({
  template: JST['event_show'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ event: this.model }));
    return this;
  }
});