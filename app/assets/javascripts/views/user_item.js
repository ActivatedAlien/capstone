CapstoneProject.Views.PostItem = Backbone.View.extend({
  template: JST['user_item'],
  tagname: "<li>",

  render: function() {
    this.$el.html(this.template({ user: this.model }));
    return this;
  }

});
