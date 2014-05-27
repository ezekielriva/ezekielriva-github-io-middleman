define(['jquery',
        'backbone'], function($, Backbone) {

  App.prototype.Views.NavView = Backbone.View.extend({

    el: '#main_nav_bar',

    events: {
      'click .item-link': '_setActiveMenu'
    },

    initialize: function() {
      var defaultEvent = {
        currentTarget: { hash: '#home' }
      };
      this._setActiveMenu(defaultEvent);
    },

    _setActiveMenu: function(e) {
      var hash = e.currentTarget.hash,
          selector  = '[href={href}]'.replace('{href}', hash);

      this.$el.find('.active').removeClass('active');
      this.$el.find(selector).addClass('active');
    }

  });

  return App.prototype.Views.NavView;
});
