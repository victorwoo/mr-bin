'use strict';

/**
 * @ngdoc function
 * @name mrbinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mrbinApp
 */
angular.module('mrbinApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
