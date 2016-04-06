'use strict';

require("./../css/main.css");

let app = angular.module('myApp', []);

app.controller('titleCtrl', function() {
  this.title = 'Title';
});
