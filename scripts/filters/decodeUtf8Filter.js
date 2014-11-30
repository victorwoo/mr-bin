/**
 * Created by Victor on 2014/11/21.
 */
angular.module('mrbinApp').filter('decodeUtf8', function () {
  'use strict';
  var filter = function(input){
    //return uintToString(input);
    return 'decodeUtf8Filter';
  };
  return filter;
});
/*
function stringToUint(string) {
  'use strict';
  var string = btoa(unescape(encodeURIComponent(string))),
    charList = string.split(''),
    uintArray = [];
  for (var i = 0; i < charList.length; i++) {
    uintArray.push(charList[i].charCodeAt(0));
  }
  return new Uint8Array(uintArray);
}

function uintToString(uintArray) {
  'use strict';
  var encodedString = String.fromCharCode.apply(null, uintArray),
    decodedString = decodeURIComponent(escape(atob(encodedString)));
  return decodedString;
}
*/
