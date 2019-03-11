/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let count = 0;
  nums.sort((a, b) => a - b);
  let last = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (last === cur) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - cur === k) {
        count += 1;
        break;
      }
    }
    last = cur;
  }
  return count;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  const set = new Set();
  const res = new Set();
  nums.forEach(item => {
    if (set.has(item + k)) res.add(item + k);
    if (set.has(item - k)) res.add(item);
    set.add(item);
  });
  return res.size;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  let count = 0;
  if (k === 0) {
    let index = 0;
    let num = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[index]) {
        num += 1;
      } else if (num) {
        count += 1;
        num = 0;
        index = i;
      }
    }
    if (num) {
      count += 1;
    }
    return count;
  }
  const map = new Map();
  nums.forEach((num, index) => {
    map.set(num, index);
  });
  [...map.keys()].forEach(key => {
    if (map.has(key + k)) count += 1;
  });
  return count;
};
