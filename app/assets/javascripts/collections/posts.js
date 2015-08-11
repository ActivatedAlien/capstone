CapstoneProject.Collections.Posts = Backbone.Collection.extend({
  model: CapstoneProject.Models.Post,
  url: "api/posts",
  comparator: function(post) {
    return (new Date()) - new Date(post.get("created_at"));
  }
});
