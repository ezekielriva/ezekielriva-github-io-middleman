define(['jquery', 'backbone',
        'text!templates/works.html'],
function($, Backbone, WorksTemplate) {

  App.prototype.Views.WorksView = Backbone.View.extend({

    render: function() {
      this.$el.append( _.template(WorksTemplate, { works: this.collection.models }) );
    },

  });

  return App.prototype.Views.WorksView;
});
