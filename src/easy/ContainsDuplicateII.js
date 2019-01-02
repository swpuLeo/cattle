/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], i);
    else {
      let j = map.get(nums[i]);
      if (Math.abs(i - j) <= k) return true;
      else map.set(nums[i], i);
    }
  }
  return false;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 优化代码结构
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let j = map.get(nums[i]);
    if (j !== undefined && Math.abs(i - j) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
};