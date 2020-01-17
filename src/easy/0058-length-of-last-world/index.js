/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) return 0;
  s = s.trim();
  var len = s.length;
  var result = 0;
  for (var i = len - 1; i >= 0; i--) {
    var cur = s[i];
    if (cur !== ' ') {
      result += 1;
    } else {
      break;
    }
  }
  return result;
};