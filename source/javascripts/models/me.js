define(['backbone'], function(Backbone) {
  App.prototype.Models.Me = Backbone.Model.extend({
    url: 'data/me.json',
    defaults: {
      'first_name': 'Ezequiel',
      'last_name': 'Rivadeneira Lichardi',
      'location': 'San Miguel de Tucumán, Argentina',
      'profile_photo': 'me.png',
      'bio': "Hi, I am Ezequiel a full-stack web developer based in Tucumán, Argentina. I've experience on \
              different technologies and agile methodologies. I use the best combination of them for solve \
              different problems. \
              I go on searching good and hard professional challenges for enhancement my knowledge. \
              I'd love to generate value for your business"
    },

    initialize: function() {
      console.log('Initializing Me Model');
    },

    /* Custom methods */
    fullName: function() {
      return [ this.get('first_name'), this.get('last_name') ].join(' ');
    },

  });

  return App.prototype.Models.Me;
});
