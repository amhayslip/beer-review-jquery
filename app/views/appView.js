var Backbone = require('Backbone');
var appTemplate = require('./../templates/app.hbs');
var BeerModel = require('./../models/beerModel');

module.exports = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .post-beer': 'postBeer'
  },

  initialize: function () {
    this.model.on('change:all_beers', this.render, this);

    this.render();
  },

  postBeer: function (e) {
    e.preventDefault();

    var name = this.$el.find('.beer-input').val();
    var user = this.$el.find('.user-input').val();

    this.$el.find('.beer-input').val('');
    this.$el.find('.user-input').val('');

    this.model.get('all_beers').add(
      new BeerModel({ name: name, user: user}));
  },

  render: function () {
    $(this.el).append(appTemplate(this.model.toJSON()));
  }
});