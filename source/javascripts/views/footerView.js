define(['jquery',
        'backbone',
        'views/skillsView',
        'text!templates/main_footer.html'],
  function($, Backbone, SkillsView, MainFooterTemplate) {

    App.prototype.Views.FooterView = Backbone.View.extend({

      el: '.main-footer',
      childViews: {},

      initialize: function() {
        console.log('Initialize FooterView');
        this.render();
      },

      render: function() {
        this.$el.append( _.template(MainFooterTemplate, { model: this.model }) )
      },

      renderSkillsView: function(skills) {
        this.childViews.skillView = new SkillsView({ collection: skills });
        this.childViews.skillView.render();
      }

    });

    return App.prototype.Views.FooterView;
});
