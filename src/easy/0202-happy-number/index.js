/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set();
  while (n !== 1) {
    let ret = 0;
    let num = 0;
    while (n) {
      ret = n % 10;
      num += ret * ret;
      n = Math.floor(n / 10);
    }
    n = num;
    if (!set.has(num)) {
      set.add(num);
    } else {
      break;
    }
  }
  return n === 1;
};