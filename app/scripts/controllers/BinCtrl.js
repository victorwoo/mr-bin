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
  var bytes = [0x46, 0x75, 0x6A, 0x69, 0x61, 0x6E, 0x20, 0x4C, 0x41, 0x4E, 0x44, 0x49, 0x20, 0x43, 0x6F, 0x6D, 0x6D, 0x65, 0x72, 0x63, 0x69, 0x61, 0x6C, 0x20, 0x45, 0x71, 0x75, 0x69, 0x70, 0x6D, 0x65, 0x6E, 0x74, 0x20, 0x43, 0x6F, 0x2E, 0x2C, 0x4C, 0x74, 0x64, 0x2E, 0x20, 0xE7, 0xA6, 0x8F, 0xE5, 0xBB, 0xBA, 0xE8, 0x81, 0x94, 0xE8, 0xBF, 0xAA, 0xE5, 0x95, 0x86, 0xE7, 0x94, 0xA8, 0xE8, 0xAE, 0xBE, 0xE5, 0xA4, 0x87, 0xE6, 0x9C, 0x89, 0xE9, 0x99, 0x90, 0xE5, 0x85, 0xAC, 0xE5, 0x8F, 0xB8],
    rawString = String.fromCharCode.apply(null, bytes);
  //Fujian LANDI Commercial Equipment Co.,Ltd. 福建联迪商用设备有限公司
  $scope.data = {
    raw : rawString
    //utf8String: 'Fujian LANDI Commercial Equipment Co.,Ltd. 福建联迪商用设备有限公司'
  };
}]);


