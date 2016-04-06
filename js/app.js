'use strict';

require("./../css/main.css");

let app = angular.module('myApp', []);

app.controller('appCtrl', function() {
  this.title = 'Title';
  this.del = function() {
    this.title = '';
  };
});
