/**
 * Created by Victor on 2014/11/28.
 */
angular.module('mrbinApp').controller('Iso88591StringCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatIso88591String = function () {
    var raw = $scope.data.raw;
    $scope.data.iso88591String = raw;
  };

  $scope.$watch('data.raw', function () {
    formatIso88591String();
  });

  $scope.submitIso88591String = function () {
    console.log('submitIso88591String()');
    var validChars = $scope.data.iso88591String.split('').filter(function (element) {
      return element.charCodeAt(0) >= 0 && element.charCodeAt(0) <= 0xFF;
    });
    $scope.data.iso88591String = validChars.join('');
    $scope.data.raw = $scope.data.iso88591String;
  };
}]);
