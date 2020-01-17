/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0;
  while(n) {
    res += n % 2;
    n = Math.floor(n / 2);
  }
  return res;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0;
  while(n) {
    res += n & 1;
    n >>= 1;
  }
  return res;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0;
  while(n) {
    res += 1;
    n &= n - 1;
  }
  return res;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  n = (n & 0x55555555) + ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  n = (n & 0x0F0F0F0F) + ((n >> 4) & 0x0F0F0F0F);
  n = (n * (0x01010101) >> 24);
  return n;
};