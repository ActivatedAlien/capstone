CapstoneProject.Views.InviteForm = Backbone.View.extend({
  template: JST['invite_form'],
  events: {
    "submit form": "saveInvite"
  },

  initialize: function(options) {
    this.attendees = options.attendees;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  saveInvite: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON();
    var invite = new CapstoneProject.Models.Invite({
      invite: {
        event_id: this.model.id
      },
      username: attrs["username"]
    });

    invite.save({}, {
      success: function() {
        this.model.trigger("invite", this.model);
      }.bind(this)
    });
  }
});
