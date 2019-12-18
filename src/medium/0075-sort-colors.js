/**
 * Given an array with n objects colored red, white or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 *
 * Note: You are not suppose to use the library's sort function for this problem.

  Example:
  Input: [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]

  Follow up:
  A rather straight forward solution is a two-pass algorithm using counting sort.
  First, iterate the array counting number of 0's, 1's, and 2's,
  then overwrite array with total number of 0's, then 1's and followed by 2's.
  Could you come up with a one-pass algorithm using only constant space?

  ------------------

  给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
  此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

  注意:
  不能使用代码库中的排序函数来解决这道题。

  示例:
  输入: [2,0,2,1,1,0]
  输出: [0,0,1,1,2,2]

  进阶：
  一个直观的解决方案是使用计数排序的两趟扫描算法。
  首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
  你能想出一个仅使用常数空间的一趟扫描算法吗？
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
