var Backbone = require('backbone');
var BeerModel = require('./../models/beerModel');

module.exports = Backbone.Collection.extend({

  model: BeerModel

});