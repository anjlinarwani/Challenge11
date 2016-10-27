'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('AboutCtrl', function () {
    this.contentItems = [
      'The App is an example of using AngularJS',
      'In the JS AUH Workshop for learning directives',
      'and learning by doing'
    ];
  });
