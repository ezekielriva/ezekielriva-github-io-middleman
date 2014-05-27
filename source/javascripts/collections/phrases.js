define(['backbone', 'models/phrase'], function(Backbone, Phrase) {
  App.prototype.Collections.Phrases = Backbone.Collection.extend({
    model: Phrase,
    url: 'data/phrases.json',

    initialize: function() {
      console.log('Initializing Phrases Collection');
    },

  });

  return App.prototype.Collections.Phrases;
});
