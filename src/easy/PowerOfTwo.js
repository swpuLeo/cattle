/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  while (n) {
    if (n & 1 === 1) break;
    n = n >> 1;
  }
  n = n >> 1;
  return n === 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  while (n >= 2 && n % 2 === 0) {
    n = n >> 1;
  }
  return n === 1;
};
