CapstoneProject.Views.EventShow = Backbone.CompositeView.extend({
  template: JST['event_show'],

  initialize: function(options) {
    this.attendees = this.model.attendees();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "invite", this.handleInvite);
  },

  handleInvite: function(event) {
    event.fetch();
  },

  render: function () {
    var view = this;
    this.$el.html(this.template({ event: this.model }));

    this.attendees.each(function(user) {
      var subView = new CapstoneProject.Views.UserItem({ model: user });
      view.addSubview(".attendees", subView);
    });

    if (this.model.get('owner_id') === parseInt(CapstoneProject.USER_ID)) {
      var inviteFormView = new CapstoneProject.Views.InviteForm({
        model: this.model
      });
      view.addSubview(".invite-form", inviteFormView);
    }

    return this;
  }
});
