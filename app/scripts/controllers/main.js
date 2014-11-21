'use strict';

/**
 * @ngdoc function
 * @name mrbinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mrbinApp
 */
angular.module('mrbinApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
