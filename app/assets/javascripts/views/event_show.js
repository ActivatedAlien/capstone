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

  inputElement: function(elementType, attribute, inputType) {
    return JST[elementType]({
      attribute: attribute,
      value: this.model.get(attribute),
      name: "event[" + attribute + "]",
      type: inputType
    });
  },

  allowEdit: function(event) {
    var $target = $(event.currentTarget);
    var elementType = "input_field";
    var attribute = $target.data("field");
    var inputType = "text"

    if (attribute === "time") {
      elementType = "input_date_time_picker"
    } else if (attribute === "description") {
      elementType = "input_textarea";
    } else if (attribute === "num_slots") {
      inputType = "number"
    }

    $target.html(this.inputElement(elementType, attribute, inputType));
  },

  finishEdit: function(event) {
    var $target = $(event.currentTarget);
    var attrs = $($target.children()[0]).serializeJSON();
    this.model.set(attrs);

    this.model.save({}, {
      success: function() {
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
