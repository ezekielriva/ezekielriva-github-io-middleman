define(['backbone'], function(Backbone) {
  App.prototype.Models.Phrase = Backbone.Model.extend({
    initialize: function() {
      console.log('Initializing Phrase Model');
    }
  });

  return App.prototype.Models.Phrase;
});
