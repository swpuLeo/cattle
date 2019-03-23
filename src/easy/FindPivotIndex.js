/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum = nums.slice(0, i).reduce((prev, next) => prev + next, 0);
    rightSum = nums.slice(i + 1).reduce((prev, next) => prev + next, 0);
    if (leftSum === rightSum) return i;
  }
  return -1;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((prev, next) => prev + next, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};