/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) return num;
  let res = 0;
  let n = num;
  while (n) {
    res += (n % 10);
    n = Math.floor(n / 10);
  }
  return addDigits(res);
};

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num === 0) return 0;
  const ret = num % 9;
  return ret === 0 ? 9 : ret;
};