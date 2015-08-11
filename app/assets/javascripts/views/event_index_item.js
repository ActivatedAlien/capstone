CapstoneProject.Views.EventIndexItem = Backbone.View.extend({
  template: JST['event_index_item'],
  tagname: "<li>",

  render: function() {
    this.$el.html(this.template({ event: this.model }));
    return this;
  }

});
