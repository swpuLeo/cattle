/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let num = n;
  let start = 'A'.charCodeAt(0) - 1;
  let res = '';
  while (num) {
    let ret = num % 26;
    if (ret === 0) {
      ret = 26;
      num -= 1;
    }
    res = String.fromCharCode(ret + start) + res;
    num = Math.floor(num / 26);
  }
  return res;
};