/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map.get(i)) return i;
  }
};


/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
  const sum = nums.reduce((prev, next) => prev + next, 0);
  const total = Math.floor((nums.length) * (nums.length + 1) / 2);
  return total - sum;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length;
  let diff = 0;
  for (let i = 0; i < len; i++) {
    diff ^= i;
    diff ^= nums[i];
  }
  // 最后应该再与 len 进行异或运算
  return diff ^ len;
};
