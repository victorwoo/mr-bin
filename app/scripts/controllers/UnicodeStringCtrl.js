/**
 * Created by Victor on 2014/11/28.
 */
angular.module('mrbinApp').controller('UnicodeStringCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatUnicodeString = function () {
    var raw = $scope.data.raw;
    $scope.data.unicodeString = raw;
  };

  $scope.$watch('data.raw', function () {
    console.log('data.raw @UnicodeStringCtrl');
    formatUnicodeString();
  });

  $scope.submitUnicodeString = function () {
    console.log('submitUnicodeString()');
    $scope.data.raw = $scope.data.unicodeString;
  };
}]);
