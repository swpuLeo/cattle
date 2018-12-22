/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0;
  while (n) {
    n = Math.floor(n / 5);
    res += n;
  }
  return res;
};