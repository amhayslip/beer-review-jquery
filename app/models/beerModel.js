// beer constructor
var Beer = function (name, user) {
  this.name = name;
  this.user = user;
  this.id = generateID();
  this.reviews = [];
}