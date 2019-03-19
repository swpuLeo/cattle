/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;
  if (nums[0] > nums[1]) {
    // [nums[0], nums[1]] = [nums[1], nums[2]];
    nums[0] = nums[1];
    count += 1;
  }
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count += 1;
      if (count > 1) return false;
      if (nums[i -1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
};