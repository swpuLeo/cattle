/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let count = 0;
  const res = Array(60).fill(0);
  for (let t of time) {
    res[t % 60] += 1;
  }
  for (let i = 0; i <= 30; i++) {
    if ((i === 0) || (i === 30) && res[i] > 0) {
      count += (res[i]) * (res[i] - 1) / 2;
      continue;
    }
    if (res[i] > 0 && res[60 - i] > 0) {
      count += res[i] * res[60 - i];
      res[i] = res[60 - i] = 0;
    }
  }
  return count;
};
