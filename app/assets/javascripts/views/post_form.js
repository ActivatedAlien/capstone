CapstoneProject.Views.PostForm = Backbone.View.extend({
  template: JST['post_form'],
  events: {
    "submit form": "savePost"
  },

  initialize: function(options) {
    this.forum = options.forum;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({ post: this.model }));
    return this;
  },

  savePost: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().post;
    attrs['forum_id'] = this.forum.id;
    var post = this.model, posts = this.collection;
    post.set(attrs);

    post.save(attrs, {
      success: function() {
        posts.add(post);
      }
    });
  }
});
