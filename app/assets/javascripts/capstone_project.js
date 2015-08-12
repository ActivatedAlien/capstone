window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    CapstoneProject.USERNAME = options.USERNAME;
    CapstoneProject.USER_ID = options.USER_ID;

    var router = new CapstoneProject.Routers.Router({
      $rootEl: $(".content"),
      scheduledEvents: CapstoneProject.Collections.ScheduledEvents,
      pendingEvents: CapstoneProject.Collections.PendingEvents,
      forums: CapstoneProject.Collections.forums,
    });

    var navShow = new CapstoneProject.Views.NavShow({
      router: router
    });

    $(".navbar").html(navShow.render().$el);

    Backbone.history.start();
  }
};
