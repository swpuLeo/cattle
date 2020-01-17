/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num === 0) return false;
  while (num % 4 === 0) {
    num /= 4;
  }
  return num === 1;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num < 0 || num & (num - 1)) return false;
  return num & 0x55555555;
};