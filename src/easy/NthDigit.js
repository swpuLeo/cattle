/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let base = 9;
  let sum = 9;
  let i = 1;
  while (sum < n) {
    base *= 10;
    sum += base * (++i);
  }
  if (i === 1) return n;
  n -= sum - i * base;
  let str = (Math.floor((n + 1) / i) + Math.pow(10, i - 1) - 1).toString();
  let index = (n - 1) % i;
  return str[index] - '0';
};