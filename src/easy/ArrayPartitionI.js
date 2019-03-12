/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  nums.forEach((item, index) => {
    if (index % 2 === 0) res += item;
  });
  return res;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const arr = [];
  const maxValue = 10000;
  nums.forEach(item => {
    if(!arr[item + maxValue]) {
      arr[item + maxValue] = 1;
    } else {
      arr[item + maxValue] += 1;
    }
  });
  let res = 0;
  let n = -maxValue;
  let first = true;
  while (n <= maxValue) {
    if (!arr[n + maxValue]) {
      n += 1;
      continue;
    }
    if (first) {
      res += n;
      first = false;
    } else {
      first = true;
    }
    arr[n + maxValue] -= 1;
  }
  return res;
};
