/**
 * Created by Victor on 2014/11/28.
 */
angular.module('mrbinApp').controller('Utf8StringCtrl', ['$scope', function ($scope) {
  'use strict';

  function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
  }

  function decode_utf8(s) {
    return decodeURIComponent(escape(s));
  }

  var formatUtf8String = function () {
    var raw = $scope.data.raw;
    $scope.data.utf8String = encode_utf8(raw);
  };

  $scope.$watch('data.raw', function () {
    console.log('data.raw @Utf8StringCtrl');
    formatUtf8String();
  });

  $scope.submitUtf8String = function () {
    console.log('submitUtf8String()');

    $scope.data.raw = '';
  };
}]);
