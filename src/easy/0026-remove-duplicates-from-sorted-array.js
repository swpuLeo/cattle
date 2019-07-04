/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const length = nums.length
  let number = 0
  for (let i = 0; i < length; i++) {
    if (nums[i] !== nums[number]) {
      number += 1
      nums[number] = nums[i]
    }
  }
  return number + 1
};