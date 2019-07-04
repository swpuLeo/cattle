/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const cur = nums[i] + nums[left] + nums[right];
      if (Math.abs(cur - target) < Math.abs(closest - target)) {
        closest = cur;
      }
      if (cur < target) left += 1;
      else if (cur > target) right -= 1;
      else return target;
    }
  }
  return closest;
};
