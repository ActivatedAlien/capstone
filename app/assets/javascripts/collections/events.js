CapstoneProject.Collections.Events = Backbone.Collection.extend({
  model: CapstoneProject.Models.Event,
  url: "api/events",

  getOrFetch: function(id) {
    var event = this.get(id);

    if (!event) {
      event = new CapstoneProject.Models.Event({ id: id });
      event.fetch({
        success: function() {
          this.add(event);
        }.bind(this)
      });
    } else {
      event.fetch();
    }

    return event;
  }
});
