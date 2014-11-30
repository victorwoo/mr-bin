/**
 * Created by Victor on 2014/11/27.
 */
/**
 * Created by Victor on 2014/11/27.
 */
angular.module('mrbinApp').controller('CStyleStringCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatCStyleString = function () {
    var raw = $scope.data.raw,
      cStyleString = '',
      hexChar;

    for (var i = 0; i < raw.length; i++) {
      hexChar = raw.charCodeAt(i).toString(16);
      cStyleString += '\\x' + (hexChar < 10 ? '0' + hexChar : hexChar).toUpperCase();
    }

    $scope.data.cStyleString = '"' + cStyleString + '"';
  };

  $scope.$watch('data.raw', function () {
    console.log('data.raw @CStyleStringCtrl');
    formatCStyleString();
  });

  $scope.submitCStyleString = function () {
    console.log('submitCStyleString()');

    var cStyleString = $scope.data.cStyleString,
      raw = [];
    try {
      if (!/^\s*"?(\\x[0-9a-fA-F]{2})*"?\s*$/m.test(cStyleString)) {
        throw new Error('Wrong Format!');
      }

      raw = cStyleString.match(/x[0-9a-fA-F]{2}/mg).map(function(item){
        return '0' + item;
      });
      raw = String.fromCharCode.apply(null, raw);
      if ($scope.data.raw === raw) {
        formatCStyleString();
      } else {
        $scope.data.raw = raw;
      }
    } catch (e) {
      console.warn(e);
    }
  };
}]);
