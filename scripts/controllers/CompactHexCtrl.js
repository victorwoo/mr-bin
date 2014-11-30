/**
 * Created by Victor on 2014/11/27.
 */

angular.module('mrbinApp').controller('CompactHexCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatCompactHex = function () {
    var raw = $scope.data.raw,
      compactHex = '',
      hexChar;

    for (var i = 0; i < raw.length; i++) {
      hexChar = raw.charCodeAt(i).toString(16).toUpperCase();
      compactHex += (hexChar < 10 ? '0' + hexChar : hexChar);
    }
    $scope.data.compactHex = compactHex.trim();
  };

  $scope.$watch('data.raw', function () {
    console.log('data.raw @CompactHexCtrl');
    formatCompactHex();
  });

  $scope.submitCompactHex = function () {
    console.log('submitCompactHex()');

    var compactHex, charCode, hexChar,
      raw = [];
    try {
      compactHex = $scope.data.compactHex.trim();
      if (compactHex.length % 2) {
        throw new Error('Length not times to 2');
      }

      angular.forEach(compactHex, function (value, key) {
        if (key % 2) {
          hexChar += value;
          charCode = parseInt(hexChar, 16);
          hexChar = '';
          if (isNaN(charCode) || charCode < 0 || charCode >= 256) {
            throw new Error('Wrong format');
          }
          raw.push(charCode);
        } else {
          hexChar = value;
        }
      });

      raw = String.fromCharCode.apply(null, raw);
      if ($scope.data.raw === raw) {
        formatCompactHex();
      } else {
        $scope.data.raw = raw;
      }
    } catch (e) {
      console.warn(e);
    }
  };
}]);
