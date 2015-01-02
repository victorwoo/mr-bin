/**
 * Created by Victor on 2014/11/28.
 */
angular.module('mrbinApp').controller('HexMapCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatHexMap = function () {
      var hex = require('hex'),
      hexMap,
      raw = $scope.data.raw,
      data = [],
      i;
    for (i = 0; i < raw.length; i++) {
      data.push(raw.charCodeAt(i));
    }

    console.log(data);
    hexMap = hex(data);
    $scope.data.hexMap =hexMap;
  };

  $scope.$watch('data.raw', function () {
    formatHexMap();
  });
}]);
