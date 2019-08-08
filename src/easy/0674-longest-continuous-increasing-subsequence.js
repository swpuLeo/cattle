/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length < 1) return 0;
  let max = 1;
  let tmp = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      tmp += 1;
    } else {
      max = Math.max(max, tmp);
      tmp = 1;
    }
  }
  return max = Math.max(max, tmp);
};