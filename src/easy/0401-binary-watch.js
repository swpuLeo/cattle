/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const countBit = n => {
    let ret = 0;
    while (n > 0) {
      ret += n & 1;
      n = n >> 1;
    }
    return ret;
  }
  const res = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (countBit(i) + countBit(j) === num) {
        const time = i + ':' + (j < 10 ? '0' + j : j);
        res.push(time);
      }
    }
  }
  return res;
};