/**
 * Created by Victor on 2014/11/27.
 */
angular.module('mrbinApp').controller('NormalHexCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatNormalHex = function() {
    var raw = $scope.data.raw,
      normalHex = '',
      hexChar;
    for (var i = 0; i < raw.length; i++) {
      hexChar = raw.charCodeAt(i).toString(16).toUpperCase();
      normalHex += (hexChar < 10 ? '0' + hexChar : hexChar) + ' ';
    }
    $scope.data.normalHex = normalHex.trim();
  };

  $scope.$watch('data.raw', function () {
    formatNormalHex();
  });

  $scope.submitNormalHex = function () {
    console.log('submitNormalHex()');

    var normalHex = '',
      raw = [],
      charCode;

    try {
      normalHex = $scope.data.normalHex.split(' ');
      angular.forEach(normalHex, function (value) {
        if (!value.length) {
          return;
        }
        if (value.length !== 2) {
          throw new Error('Wrong format');
        }
        charCode = parseInt(value, 16);
        if (isNaN(charCode) || charCode < 0 || charCode >= 256) {
          throw new Error('Wrong format');
        }
        raw.push(charCode);
      });

      raw = String.fromCharCode.apply(null, raw);
      if ($scope.data.raw === raw) {
        formatNormalHex();
      } else {
        $scope.data.raw = raw;
      }

    } catch (e) {
      console.warn(e);
    }
  };
}]);
