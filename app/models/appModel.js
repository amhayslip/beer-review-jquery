var Backbone = require('Backbone');
var BeerCollection = require('./../collections/beerCollection');

module.exports = Backbone.Model.extend({
  defaults: {
    current_beer: null,

    all_beers: new BeerCollection()
  }
});