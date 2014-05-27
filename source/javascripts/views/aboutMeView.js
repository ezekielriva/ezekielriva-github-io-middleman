define(['jquery',
        'backbone',
        'text!templates/about_me.html'],
  function($, Backbone, AboutMeTemplate) {

    App.prototype.Views.AboutMeView = Backbone.View.extend({

      el: '#main-content',

      initialize: function() {
        console.log('Initialize About Me');
      },

      render: function() {
        this.$el.html( _.template(AboutMeTemplate, { me: this.model }) )
      },

    });

    return App.prototype.Views.AboutMeView;
});
