CapstoneProject.Models.Event = Backbone.Model.extend({
  urlRoot: "api/events",

  owner: function() {
    if (!this._owner) {
      this._owner = new CapstoneProject.Models.User({ event: this });
    }

    return this._owner;
  },

  attendees: function() {
    if (!this._attendees) {
      this._attendees = new CapstoneProject.Collections.Users([], { event: this });
    }

    return this._attendees;
  },

  invitees: function() {
    if (!this._invitees) {
      this._invitees = new CapstoneProject.Collections.Users([], { event: this });
    }

    return this._invitees;
  },

  parse: function(response) {
    if (response.owner) {
      this.owner().set(response.owner, { parse: true });
    }

    if (response.attendees) {
      this.attendees().set(response.attendees, { parse: true });
    }

    if (response.invitees) {
      this.invitees().set(response.invitees, { parse: true });
    }

    return response;
  }
});
