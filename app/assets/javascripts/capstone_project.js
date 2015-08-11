window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new CapstoneProject.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  CapstoneProject.initialize();
});
