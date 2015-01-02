/**
 * Created by Victor on 2014/11/28.
 */
angular.module('mrbinApp').controller('Utf8StringCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatUtf8String = function () {
    var raw = $scope.data.raw;
    var bytes = raw.split('').map(function (element){
      return element.charCodeAt(0);
    });
    bytes = new Uint8Array(bytes);
    $scope.data.utf8String = new TextDecoder('utf-8').decode(bytes);
  };

  $scope.$watch('data.raw', function () {
    formatUtf8String();
  });

  $scope.submitUtf8String = function () {
    console.log('submitUtf8String()');
    var bytes, chars = [];
    bytes = new TextEncoder('utf-8').encode($scope.data.utf8String);
    for (var i = 0; i < bytes.byteLength; i++){
      chars.push(String.fromCharCode(bytes[i]));
    }
    $scope.data.raw = chars.join('');
  };
}]);
