/**
 * Created by Victor on 2014/11/21.
 */
/*
function d2h(d) {
  'use strict';
  return d.toString(16);
}
function h2d(h) {
  'use strict';
  return parseInt(h, 16);
}*/

angular.module('mrbinApp').controller('BinCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.data = {
    raw : 'abc' //[0x31, 0x41, 0x61]
  };

  $scope.encodeUtf8String = function () {
    console.log($scope.utf8String);
  };

  $scope.encodeUnicodeString = function () {
    console.log($scope.unicodeString);
  };
}]);


