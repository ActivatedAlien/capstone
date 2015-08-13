CapstoneProject.Collections.Users = Backbone.Collection.extend({
  model: CapstoneProject.Models.User,
  url: "api/users",
  comparator: "username"
});
