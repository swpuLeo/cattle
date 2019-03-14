/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums.length) return 0;
  const tmp = nums.concat().sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < nums.length && nums[left] === tmp[left]) left += 1;
  while (left < right && nums[right] === tmp[right]) right -= 1;
  return right - left + 1;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums.length) return 0;
  let end = -2;
  let start = -1;
  let max = nums[0];
  let min = nums[nums.length - 1];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[nums.length - 1 - i]);
    if (max > nums[i]) end = i;
    if (min < nums[nums.length - 1 - i]) start = nums.length - 1 - i;
  }
  return end - start + 1;
};