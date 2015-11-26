var Backbone = require('Backbone');
var BeerCollection = require('./../collections/beerCollection');

module.exports = Backbone.Model.extend({
  defaults: {
    // beer currently being viewed
    current_beer: null,

    // a collection representing all beers in the app
    all_beers: new BeerCollection()
  }
});