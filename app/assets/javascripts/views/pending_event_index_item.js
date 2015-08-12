CapstoneProject.Views.PendingEventIndexItem = Backbone.View.extend({
  template: JST['pending_event_index_item'],

  attributes: {
    className: "list-group",
  },

  events: {
    "click .accept-button": "acceptInvite",
    "click .decline-button": "declineInvite"
  },

  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function() {
    this.$el.html(this.template({ event: this.model }));
    return this;
  },

  acceptInvite: function(event) {
    var signup = new CapstoneProject.Models.Signup();
    signup.set({
      signup: {
        event_id: this.model.id
      }
    });
    signup.save({}, {
      success: function() {
        this.model.trigger("signup", signup)
      }.bind(this)
    });
  },

  declineInvite: function(event) {
    var signup = new CapstoneProject.Models.Signup();
    signup.set({
      signup: {
        event_id: this.model.id
      }
    });
    signup.save({}, {
      success: function() {
        signup.destroy({
          data: { id: signup.id },
          success: function() {
            Backbone.history.navigate("#", { trigger: true });
          }
        });
      }
    });
  }

});
