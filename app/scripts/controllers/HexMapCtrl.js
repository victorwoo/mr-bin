/**
 * Created by Victor on 2014/11/28.
 */
angular.module('mrbinApp').controller('HexMapCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatHexMap = function () {
    var Buffer = require('buffer').Buffer,
      hex = require('hex'),
      buffer,
      hexMap;
    buffer = new Buffer($scope.data.raw, 'utf8');
    console.log(buffer);
    hexMap = hex(buffer);
    console.log(hexMap);
    $scope.data.hexMap =hexMap;
  };

  $scope.$watch('data.raw', function () {
    formatHexMap();
  });
}]);
