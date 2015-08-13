CapstoneProject.Views.NavShow = Backbone.View.extend({
  template: JST['nav_show'],

  events: {
    "click .logout": "logout"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  initialize: function(options) {
    this.router = options.router;
    this.listenTo(this.router, "route", this.handleRouting);
  },

  logout: function(event) {
    $.ajax({
      url: "/session",
      type: 'POST',
      data: { "_method": "DELETE" },
      success: function(result) {
        window.location = "/session/new"
      }
    });
  }
});
