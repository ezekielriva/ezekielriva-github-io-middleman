define(['backbone', 'models/work'], function(Backbone, Work) {
  App.prototype.Collections.Works = Backbone.Collection.extend({
    model: Work,
    url: 'data/works.json',

    initialize: function() {
      console.log('Initializing Works Collection');
    },

  });

  return App.prototype.Collections.Works;
});
