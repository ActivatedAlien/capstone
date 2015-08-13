CapstoneProject.Views.EventShow = Backbone.CompositeView.extend({
  template: JST['event_show'],

  events: {
    "dblclick .edit": "allowEdit",
    "blur .edit": "finishEdit"
  },

  initialize: function(options) {
    this.owner = this.model.owner();
    this.attendees = this.model.attendees();
    this.invitees = this.model.invitees();

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "invite", this.handleInvite);
  },

  handleInvite: function(event) {
    event.fetch();
  },

  allowEdit: function(event) {
    var $target = $(event.currentTarget);
    var text = $target.text();
    switch ($target.data("field")) {
      case "address":
        $target.html(JST['input_field']({
          attribute: "address",
          value: this.model.get("address"),
          name: "event[address]",
          type: "text"
        }));
        break;
      case "time":
        $target.html(JST['input_date_time_picker']({
          attribute: "time",
          value: this.model.get("time"),
          name: "event[time]",
          type: "text"
        }));
        break;
      case "description":
        $target.html(JST['input_textarea']({
          value: this.model.get("description"),
          name: "event[description]",
        }));
        break;
      case "num-slots":
        $target.html(JST['input_field']({
          attribute: "num_slots",
          value: this.model.get("num_slots"),
          name: "event[num_slots]",
          type: "number"
        }));
        break;
    }
  },

  finishEdit: function(event) {
    var $target = $(event.currentTarget);
    var attrs = $($target.children()[0]).serializeJSON();
    this.model.set(attrs);

    this.model.save({}, {
      success: function() {
        $target.empty();
        $target.html($target.text());
      }
    });
  },

  render: function () {
    var view = this;
    this.$el.html(this.template({ event: this.model, owner: this.owner }));

    this.attendees.each(function(user) {
      var subView = new CapstoneProject.Views.UserItem({ model: user });
      view.addSubview(".attendees", subView);
    });

    this.invitees.each(function(user) {
      var subView = new CapstoneProject.Views.UserItem({ model: user });
      view.addSubview(".invitees", subView);
    });

    if (this.owner.id === parseInt(CapstoneProject.USER_ID)) {
      var inviteFormView = new CapstoneProject.Views.InviteForm({
        model: this.model
      });
      view.addSubview(".invite-form", inviteFormView);
    }

    return this;
  }
});
