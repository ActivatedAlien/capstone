CapstoneProject.Views.EventIndex = Backbone.CompositeView.extend({
    template: JST['event_index'],
    events: {
    },

    initialize: function() {
      this.listenTo(this.collection, "sync", this.render);
    },

    render: function() {
      var view = this;
      this.$el.html(this.template({ events: this.collection }));

      this.collection.each(function(event) {
        var subView = new CapstoneProject.Views.EventIndexItem({ model: event });
        view.addSubview(".event-index", subView);
      });

      return this;
    }
});
