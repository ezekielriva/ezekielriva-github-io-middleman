define(['jquery', 'backbone',
        'views/phrasesView',
        'views/worksView'], function($, Backbone, PhrasesView, WorksView) {

  App.prototype.Views.HomeView = Backbone.View.extend({

    subViews: {},

    el: '#main-content',

    initialize: function(phrases) {
      console.log('initialize view Home');
    },

    renderPhrases: function() {
      var that = this;
      this.phrases.fetch({ success: function(phrases) {
        that.subViews['phrasesView'] = new PhrasesView({
          collection: phrases,
          el: that.el });
        that.subViews.phrasesView.render();
      }, error: app.errorHandler });
    },

    renderWorks: function() {
      var that = this;
      this.works.fetch({ success: function (works) {
        that.subViews['worksView'] = new WorksView({
          collection: works,
          el: that.el
        });
        that.subViews.worksView.render();
      }, error: app.errorHandler })
    },

    render: function() {
      this.renderPhrases();
      this.renderWorks();
    },

    destroy: function () {
      _.each(this.subViews, function(view) {
        app.destroyView(view)
      });
    },

  });

  return App.prototype.Views.HomeView;
});
