CapstoneProject.Views.ForumIndexItem = Backbone.View.extend({
  template: JST['forum_index_item'],
  tagname: "<li>",

  render: function() {
    this.$el.html(this.template({ forum: this.model }));
    return this;
  }

});
