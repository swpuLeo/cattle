/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  function interpret(s, accum, sum) {
    var times = 1;
    var num = s.charAt(0);
    var len = s.length;
    var result = '';

    for (var i = 1; i < len; i++) {
      if (s.charAt(i) !== num) {
        result += times + num;
        num = s.charAt(i);
        times = 1;
      } else {
        times++;
      }
    }
    if (accum === 1) {
      result = '1';
    } else {
      result += times + num;
    }
    if (accum === sum) {
      return result;
    } else {
      return interpret(result, accum + 1, sum);
    }
  }
  return interpret('1', 1, n);
};