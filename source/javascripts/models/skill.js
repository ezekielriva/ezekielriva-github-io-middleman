define(['backbone'], function(Backbone) {
  App.prototype.Models.Skill = Backbone.Model.extend({
    initialize: function() {
      console.log('Initializing Skill Model');
    }
  });

  return App.prototype.Models.Skill;
});
