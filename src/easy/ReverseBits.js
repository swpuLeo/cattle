/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let ans = 0;
  let i = 32;
  while (i--) {
    ans <<= 1;
    ans += n & 1;
    n >>= 1;
  }
  return ans >>> 0;
};