define(['backbone', 'models/skill'], function(Backbone, Skill) {
  App.prototype.Collections.Skills = Backbone.Collection.extend({
    model: Skill,
    url: 'data/skills.json',

    initialize: function() {
      console.log('Initializing Skills Collection');
    },

  });

  return App.prototype.Collections.Skills;
});
