define(['jquery', 'backbone',
        'text!templates/phrases.html'], function($, Backbone, PhrasesTemplate) {

  App.prototype.Views.Phrases = Backbone.View.extend({

    render: function() {
      this.$el.prepend( _.template(PhrasesTemplate, { phrases: this.collection.models }) );
      this.initAnimation();
    },

    initAnimation: function() {
      var that = this;
      this.timer = setInterval( function () {
        that.changePhrase();
      }, 3000 );
    },

    changePhrase: function() {
      var $el = this.$el.find('.phrase'),
          $active = this.$el.find('.active'),
          phrasesLength = $el.length,
          index = $el.index($active);

      $active.removeClass('active');
      if( (index+1) >= phrasesLength ) {
        $el.first().addClass('active');
      } else {
        $active = $( $el.get( index+1 ) )
        $active.addClass('active');
      }
    },

    destroy: function() {
      clearInterval(this.timer);
    }

  });

  return App.prototype.Views.Phrases;
});
