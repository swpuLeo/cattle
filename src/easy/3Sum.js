/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  if (!nums.length) return res
  // 先对数组进行排序
  nums.sort((prev, next) => prev - next)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // 将三数转换为两数
    let target = 0 - nums[i]
    // 使用双指针
    let m = i + 1
    let n = nums.length - 1
    while(m < n) {
      if (nums[m] + nums[n] === target) {
        // 命中 target，就加入 res 中
        res.push([nums[i], nums[m], nums[n]])
        // 避免重复
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
