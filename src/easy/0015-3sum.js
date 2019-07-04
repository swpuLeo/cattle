/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  if (!nums.length) return res
  nums.sort((prev, next) => prev - next)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let target = 0 - nums[i]
    let m = i + 1
    let n = nums.length - 1
    while(m < n) {
      if (nums[m] + nums[n] === target) {
        res.push([nums[i], nums[m], nums[n]])
        while (m < n && nums[m] === nums[m + 1]) {
          m += 1
        }
        while (m < n && nums[n] === nums[n - 1]) {
          n -= 1
        }
        m += 1
        n -= 1
      } else if (nums[m] + nums[n] < target) {
        m += 1
      } else {
        n -= 1
      }
    }
  }
  return res
};
