var Backbone = require('Backbone');
var _ = require('lodash');
var appTemplate = require('./../templates/app.hbs');
var BeerModel = require('./../models/beerModel');

var BeerView = require('./../views/beerView');

module.exports = Backbone.View.extend({
  el: '.app-view',

  template: appTemplate,

  events: {
    'click .post-beer': 'postBeer'
  },

  initialize: function () {
    this.$beerInput = this.$('.beer-input');
    this.$userInput = this.$('.user-input');

    this.listenTo(this.model.get('all_beers'), 'add', this.render);

    this.render();
  },

  postBeer: function (e) {
    e.preventDefault();

    this.model.get('all_beers').add({
      name: this.$beerInput.val(),
      user: this.$userInput.val()
    }, this);

    this.$beerInput.val('');
    this.$userInput.val('');
  },

  // render this view and any subviews
  render: function () {
    this.model.get('all_beers').each(function (b) {
      new BeerView({ model: b, el: $('.beers') }).render();
    }, this);
  }
});