/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let row = 0;
  while (n > row) {
    row += 1;
    n -= row;
  }
  return row;
};

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let low = 0;
  let high = n;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (0.5 * mid * mid + 0.5 * mid <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low - 1;
};

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};
