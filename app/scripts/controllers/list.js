'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ItemsCtrl', function () {
    this.items = [
      {itemName:'Book'},
      {itemName:'Keyboard'},
      {itemName:'Laptop'}
    ];
  });
