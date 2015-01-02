/**
 * Created by Victor on 2014/11/28.
 */
angular.module('mrbinApp').controller('Utf8StringCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatUtf8String = function () {
    var iconv = require('iconv-lite'),
      raw = $scope.data.raw;

    $scope.data.utf8String = iconv.decode(iconv.encode(raw, 'latin1'), 'utf8');
  };

  $scope.$watch('data.raw', function () {
    formatUtf8String();
  });

  $scope.submitUtf8String = function () {
    var iconv = require('iconv-lite');
    $scope.data.raw = iconv.decode(iconv.encode($scope.data.utf8String, 'utf8'), 'latin1');
  };
}]);
