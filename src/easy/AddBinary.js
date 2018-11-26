/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var len = a.length - b.length;
  var rest0 = '';

  for (var j = 0; j < Math.abs(len); j++) rest0 += '0';

  if (len >= 0) b = rest0 + b;
  else a = rest0 + a;

  var res = '';
  var next = 0;
  for (var i = a.length - 1; i >= 0; i--) {
    var curA = parseInt(a[i]);
    var curB = parseInt(b[i]);
    var curRes = curA + curB + next;
    if (curRes >= 2) {
      next = 1
      if (curRes === 2) {
        res = '0' + res;
      } else if (curRes === 3) {
        res = '1' + res;
      }
    } else {
      next = 0;
      if (curRes === 1) {
        res = '1' + res;
      } else if (curRes === 0) {
        res = '0' + res;
      }
    }
  }
  return next === 0 ? res : next + res;
};