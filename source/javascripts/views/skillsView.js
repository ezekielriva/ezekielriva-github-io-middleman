define(['jquery', 'backbone',
        'text!templates/skill.html'], function($, Backbone, SkillTemplate) {

  App.prototype.Views.SkillsView = Backbone.View.extend({

    el: '#skill-list',

    initialize: function() {
      var that = this;
      this.collection.each( function(skill) {
        that.render(skill);
      });
    },

    render: function(skill) {
      this.$el.append( _.template(SkillTemplate, {skill: skill}) );
    }
  });

  return App.prototype.Views.SkillsView;
});
