var Backbone = require('backbone');
var beerTemplate = require('./../templates/beer.hbs');

module.exports = Backbone.View.extend({
  template: beerTemplate,

  render: function () {
    $(this.el).append(this.template(this.model.toJSON()))
  }
});