window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new CapstoneProject.Routers.Router({
      $rootEl: $(".content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  CapstoneProject.initialize();
});
