CapstoneProject.Collections.Forums = Backbone.Collection.extend({
  model: CapstoneProject.Models.Forum,
  url: "api/forums",

  getOrFetch: function(id) {
    var forum = this.get(id);

    if (!forum) {
      forum = new CapstoneProject.Models.Forum({ id: id });
      forum.fetch({
        success: function() {
          this.add(forum);
        }.bind(this)
      });
    } else {
      forum.fetch();
    }

    return forum;
  }
});
