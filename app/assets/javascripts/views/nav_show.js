CapstoneProject.Views.NavShow = Backbone.View.extend({
  template: JST['nav_show'],

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  initialize: function(options) {
    this.router = options.router;
    this.listenTo(this.router, "route", this.handleRouting);
  }
});
