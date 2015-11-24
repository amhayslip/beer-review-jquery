var angular = require('angular');

var app = angular.module('beerReview', []);

app.controller('MainController', [
  '$scope',
function($scope){
  $scope.hello = "Hello World!";
}]);