"use strict";

var zero = function (n, max){
  n = n.toString (16).toUpperCase ();
  while (n.length < max){
    n = "0" + n;
  }
  return n;
};

module.exports = function (buffer){
  var rows = Math.ceil (buffer.length/16);
  var last = buffer.length%16 || 16;
  var offsetLength = buffer.length.toString (16).length;
  if (offsetLength < 6) offsetLength = 6;
  
  var s = "Offset";
  while (s.length < offsetLength){
    s += " ";
  }
  
  s = "" + s + "  ";
  
  for (var i=0; i<16; i++){
    s += " " + zero (i, 2);
  }
  
  s += "\n\n";
  
  var b = 0;
  var lastBytes;
  var lastSpaces;
  var v;
  
  for (var i=0; i<rows; i++){
    s += "" + zero (b, offsetLength) + "  ";
    lastBytes = i === rows - 1 ? last : 16;
    lastSpaces = 16 - lastBytes;
    
    for (var j=0; j<lastBytes; j++){
      s += " " + zero (buffer[b], 2);
      b++;
    }
    
    for (var j=0; j<lastSpaces; j++){
      s += "   ";
    }
    
    b -= lastBytes;
    s += "   ";
    
    for (var j=0; j<lastBytes; j++){
      v = buffer[b];
      s += (v > 31 && v < 127) || v > 159 ? String.fromCharCode (v) : ".";
      b++;
    }
    
    s += "\n";
  }
  
  return s;
};