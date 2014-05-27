define(['jquery','backbone',
        'models/me',
        'collections/skills',
        'collections/phrases',
        'collections/works',
        'views/navView',
        'views/homeView',
        'views/footerView',
        'views/aboutMeView'],
function($, Backbone) {
  var Route = Backbone.Router.extend({

    routes: {
      '':             "home",
      'home':         'home',
      'about-me':     'aboutMe',
      'works':        'works',
      'resume':       'resume'
    },

    setMainView: function(newView) {
      if (app.view) {
        app.destroyView(app.view);
      }
      app.view = newView;
    },

    initialize: function() {
      app.me = new app.Models.Me();
      app.skills = new app.Collections.Skills();
      app.footerView = new app.Views.FooterView({ model: app.me });
      app.skills.fetch({ success: function (data) {
        app.footerView.renderSkillsView(data);
      }, error: app.errorHandler });
      new app.Views.NavView();
      console.log('Initialize Routes');
    },

    home: function() {
      var homeView = new app.Views.HomeView();
      homeView.phrases = new app.Collections.Phrases();
      homeView.works = new app.Collections.Works();
      this.setMainView( homeView );
      homeView.render();
    },

    aboutMe: function() {
      aboutMeView = new app.Views.AboutMeView({model: app.me});
      this.setMainView(aboutMeView);
      app.view.render();
    },

    works: function() {
      console.log('Works Page');
    },

    resume: function() {
      console.log('Resume Page');
    }

  });

  return Route;
});
