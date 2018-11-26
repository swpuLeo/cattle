/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0]
  let curSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i]

    if (curSum <= 0) {
      curSum = cur
    } else {
      curSum += cur
    }

    if (sum < curSum) {
      sum = curSum
    }
  }

  return sum
};