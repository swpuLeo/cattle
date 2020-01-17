/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const res = [];
  const abs = Math.abs;
  for (let i = 0; i < nums.length; i++) {
    nums[abs(nums[i]) - 1] = -abs(nums[abs(nums[i]) - 1]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
