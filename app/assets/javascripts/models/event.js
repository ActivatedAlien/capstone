CapstoneProject.Models.Event = Backbone.Model.extend({
  urlRoot: "api/events",

  attendees: function() {
    if (!this._attendees) {
      this._attendees = new CapstoneProject.Collections.Users([], { event: this });
    }

    return this._attendees;
  },

  parse: function(response) {
    if (response.attendees) {
      this.attendees().set(response.attendees, { parse: true });
    }

    return response;
  }
});
