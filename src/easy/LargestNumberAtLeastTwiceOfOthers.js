/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = -Infinity;
  nums.forEach(num => max = Math.max(max, num));
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) continue;
    if (2 * nums[i] > max) return -1;
  }
  return nums.indexOf(max);
};