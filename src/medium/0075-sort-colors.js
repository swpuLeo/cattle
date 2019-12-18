/**
 * https://leetcode-cn.com/problems/sort-colors/
 * https://leetcode.com/problems/sort-colors/
 */

/**
 * 方案一：计数排序
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const max = Math.max(...nums)
  const counter = Array(max + 1).fill(0)
  // 统计每个数字出现的次数
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    counter[cur] += 1
  }
  nums.length = 0
  // 根据次数重新填充 nums（原地）
  for (let i = 0; i < counter.length; i++) {
    let count = counter[i]
    while (count) {
      nums.push(i)
      count -= 1
    }
  }
}

/**
 * 方案二：双指针
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0
  let right = nums.length - 1
  let i = 0
  while (i <= right) {
    if (nums[i] < 1) {
      // 小于 1 的放左边
      ;[nums[i], nums[left]] = [nums[left], nums[i]]
      left += 1
      i += 1
    } else if (nums[i] === 1) {
      // 等于 1 的，不动
      i += 1
    } else if (i <= right && nums[i] > 1) {
      // 大于 1 的，放右边
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      right -= 1
    }
  }
}
