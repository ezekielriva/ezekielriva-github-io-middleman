define(['backbone'], function(Backbone) {
  App.prototype.Models.Work = Backbone.Model.extend({
    initialize: function() {
      console.log('Initializing Work Model');
    }
  });

  return App.prototype.Models.Work;
});
