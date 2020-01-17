/**
 * https://leetcode-cn.com/problems/subsets/
 * https://leetcode.com/problems/subsets/
 */

// 方案一：回溯算法

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  const processor = (combination, start, nums) => {
    if (start === nums.length) return res.push(combination)
    const tmp = [...combination]
    processor(combination, start + 1, nums)
    tmp.push(nums[start])
    processor(tmp, start + 1, nums)
  }
  processor([], 0, nums)
  return res
}
