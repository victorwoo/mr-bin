/**
 * Created by Victor on 2014/11/27.
 */
/**
 * Created by Victor on 2014/11/27.
 */
angular.module('mrbinApp').controller('CStyleByteArrayCtrl', ['$scope', function ($scope) {
  'use strict';

  $scope.$watch('data.raw', function () {
    console.log('data.raw @CStyleByteArrayCtrl');

    var raw = $scope.data.raw,
      cStyleByteArray = '',
      hexChar;

    for (var i = 0; i < raw.length; i++) {
      hexChar = raw.charCodeAt(i).toString(16);
      cStyleByteArray += '0x' + (hexChar < 10 ? '0' + hexChar : hexChar) + ', ';
    }

    if(cStyleByteArray.endsWith(', ')){
      cStyleByteArray = cStyleByteArray.substr(0, cStyleByteArray.length - 2);
    }

    $scope.data.cStyleByteArray = 'byte[' + raw.length + '] { ' + cStyleByteArray + ' }';
  });

  $scope.submitCStyleByteArray = function () {
    console.log('submitCStyleByteArray()');

    var cStyleByteArray = $scope.data.cStyleByteArray,
      raw = [];
    try {
      var pattern = /^byte\[\d+\]\s*\{((\s*0x[0-9a-fA-F]{2},?)*)\s*\}$/m;
      var match = pattern.exec(cStyleByteArray);
      if (match !== null) {
        cStyleByteArray = match[1];
      } else {
        throw new Error('Wrong format');
      }

      raw = cStyleByteArray.match(/0x[0-9a-fA-F]{2}/mg);
      raw = String.fromCharCode.apply(null, raw);
      $scope.data.raw = raw;
    } catch (e) {
      console.warn(e);
    }
  };
}]);