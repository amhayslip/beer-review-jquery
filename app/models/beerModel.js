var Backbone = require('backbone');
var BeerCollection = require('./../collections/beerCollection');

module.exports = Backbone.Model.extend({

  // name of the beer
  name: '',

  // user associated with the beer
  user: '',

  // a collection of beer reviews
  reviews: null
});