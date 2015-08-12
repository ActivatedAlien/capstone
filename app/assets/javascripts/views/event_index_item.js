CapstoneProject.Views.EventIndexItem = Backbone.View.extend({
  template: JST['event_index_item'],

  attributes: {
    className: "list-group",
  },

  render: function() {
    this.$el.html(this.template({ event: this.model }));
    return this;
  }

});
