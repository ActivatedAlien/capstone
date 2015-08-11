CapstoneProject.Views.ForumShow = Backbone.CompositeView.extend({
    template: JST['forum_show'],
    events: {
    },

    initialize: function() {
      this.posts = this.model.posts();
      this.listenTo(this.model, "sync", this.render);
      this.listenTo(this.posts, "sync", this.render);
    },

    render: function() {
      var view = this;
      this.$el.html(this.template({ forum: this.model }));

      this.posts.each(function(post) {
        var subView = new CapstoneProject.Views.PostItem({ model: post });
        view.addSubview(".posts", subView);
      });
      var postFormView = new CapstoneProject.Views.PostForm({
        forum: this.model,
        model: new CapstoneProject.Models.Post(),
        collection: this.posts
      });
      view.addSubview(".new-post", postFormView);

      return this;
    }
});
