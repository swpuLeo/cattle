/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let tmp = 0;
    for (let j = i; j < i + k; j++) {
      tmp += nums[j];
    }
    max = Math.max(max, tmp / k);
  }
  return max;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;
  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum - nums[i - 1] + nums[i - 1 + k];
    max = Math.max(max, sum);
  }
  return max / k;
};
