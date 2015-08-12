window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new CapstoneProject.Routers.Router({
      $rootEl: $(".content"),
      events: CapstoneProject.Collections.events,
      forums: CapstoneProject.Collections.forums,
    });

    var navShow = new CapstoneProject.Views.NavShow({
      router: router
    });

    $(".navbar").html(navShow.render().$el);

    Backbone.history.start();
  }
};

$(document).ready(function(){
  CapstoneProject.initialize();
});
