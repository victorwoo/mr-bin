/**
 * Created by Victor on 2015/1/2.
 */
/**
 * Created by Victor on 2014/11/27.
 */

angular.module('mrbinApp').controller('JavaScriptStyleDecCtrl', ['$scope', function ($scope) {
  'use strict';

  var formatJavaScriptStyleDec = function () {
    var raw = $scope.data.raw,
      javaScriptStyleDec = '',
      hexChar;

    for (var i = 0; i < raw.length; i++) {
      hexChar = raw.charCodeAt(i).toString();
      javaScriptStyleDec += hexChar + ', ';
    }

    javaScriptStyleDec = javaScriptStyleDec.replace(/,\s*$/g, '');
    $scope.data.javaScriptStyleDec = '[' + javaScriptStyleDec + ']';
  };

  $scope.$watch('data.raw', function () {
    formatJavaScriptStyleDec();
  });

  $scope.submitJavaScriptStyleDec = function () {
    console.log('submitJavaScriptStyleDec()');

    var raw = [];
    try {
      if (/\s*\[(\s*\d+,?\s*)*\]\s*/.test($scope.data.javaScriptStyleDec)) {
        var myregexp = /\d+/g;
        var match = myregexp.exec($scope.data.javaScriptStyleDec);
        while (match !== null) {
          raw.push(parseInt(match[0]));
          match = myregexp.exec($scope.data.javaScriptStyleDec);
        }
      }

      raw = String.fromCharCode.apply(null, raw);
      if ($scope.data.raw === raw) {
        formatJavaScriptStyleDec();
      } else {
        $scope.data.raw = raw;
      }
    } catch (e) {
      console.warn(e);
    }
  };
}]);
