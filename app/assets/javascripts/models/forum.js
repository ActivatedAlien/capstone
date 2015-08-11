CapstoneProject.Models.Forum = Backbone.Model.extend({
  urlRoot: "api/forums",

  posts: function() {
    if (!this._posts) {
      this._posts = new CapstoneProject.Collections.Posts([], { forum: this });
    }

    return this._posts;
  },

  parse: function(response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
    }

    return response;
  },

});
