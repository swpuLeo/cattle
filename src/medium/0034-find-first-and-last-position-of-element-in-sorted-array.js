/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const find = (nums, target, isLeft) => {
    let left = 0
    let right = nums.length
    if (left === right || target < nums[left] || target > nums[right]) return -1
    let res = -1
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] === target) {
        res = mid
      }
      if (nums[mid] > target || (isLeft && nums[mid] === target)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return res
  }
  const first = find(nums, target, true)
  const last = find(nums, target, false)
  return [first, last]
}
