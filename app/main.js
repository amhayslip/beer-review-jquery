var Backbone = require('Backbone');
var AppView = require('./views/appView');
var AppModel = require('./models/appModel');

var appModel = new AppModel(); 
var appView = new AppView({ model: appModel });