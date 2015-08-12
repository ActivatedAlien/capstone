window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    CapstoneProject.USERNAME = options.USERNAME;

    var router = new CapstoneProject.Routers.Router({
      $rootEl: $(".content"),
      scheduledEvents: CapstoneProject.Collections.scheduledEvents,
      pendingEvents: CapstoneProject.Collections.pendingEvents,
      forums: CapstoneProject.Collections.forums,
    });

    var navShow = new CapstoneProject.Views.NavShow({
      router: router
    });

    $(".navbar").html(navShow.render().$el);

    Backbone.history.start();
  }
};
