/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
let index = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    nums[index] = nums[i];
    index += 1;
  }
}
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};