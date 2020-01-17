/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const diff = target - cur;
    if (map.get(diff) !== undefined) {
      return [map.get(diff), i];
    }
    map.set(cur, i);
  }
};