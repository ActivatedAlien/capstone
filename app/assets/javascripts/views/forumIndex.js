CapstoneProject.Views.ForumIndex = Backbone.CompositeView.extend({
    template: JST['forum_index'],
    events: {
    },

    initialize: function() {
      this.listenTo(this.collection, "sync", this.render);
    },

    render: function() {
      var view = this;
      this.$el.html(this.template({ forums: this.collection }));

      this.collection.each(function(forum) {
        var subView = new CapstoneProject.Views.ForumIndexItem({ model: forum });
        view.addSubview(".forum-index", subView);
      });

      return this;
    }
});
