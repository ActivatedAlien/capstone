CapstoneProject.Views.ForumForm = Backbone.View.extend({
  template: JST['forum_form'],
  events: {
    "submit form": "saveForum"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({ forum: this.model }));
    return this;
  },

  saveForum: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().forum;
    var forum = this.model, forums = this.collection;
    this.model.set(attrs);

    forum.save(attrs, {
      success: function() {
        forums.add(forum);
        Backbone.history.navigate("#/forums/" + forum.id, { trigger: true});
      }
    });
  }
});
