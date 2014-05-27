require.config({
  paths: {
    text: 'lib/text',
    jquery: 'lib/jquery-2.0.3.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

var App = function () {};

App.prototype.Router = {};
App.prototype.Views  = {};
App.prototype.Models = {};
App.prototype.Collections = {};
App.prototype.errorHandler = function (data, xhr, text) {
  console.error('Something are wrong. Try again', xhr.responseText);
};
App.prototype.destroyView = function(view) {
  view.unbind();
  view.$el.empty(); // Empty element
  if ( view.destroy ) { view.destroy(); } // Custom destroy if it is defined
};

var app = new App();

define(['backbone', 'routes'], function(Backbone, Routes) {
  app.router = new Routes();
  Backbone.history.start({ pushstate:true });
});
