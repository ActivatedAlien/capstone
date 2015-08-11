CapstoneProject.Views.PostItem = Backbone.View.extend({
  template: JST['post_item'],
  tagname: "<li>",

  render: function() {
    this.$el.html(this.template({ post: this.model }));
    return this;
  }

});
