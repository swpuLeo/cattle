/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let low = 1, high = num;
  while (low <= high) {
    // let mid = Math.floor((low + high) / 2);
    const mid = (low + high) >>> 1;
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let sum = 0;
  let tmp = 1;
  while (sum < num) {
    sum += tmp;
    tmp += 2;
  }
  return sum === num;
};