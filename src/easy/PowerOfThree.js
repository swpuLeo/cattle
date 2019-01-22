/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
  return n > 0 && 1162261467 % n === 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
  while(n > 1) {
    n /= 3;
  }
  return n === 1;
};