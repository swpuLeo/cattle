/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = []
  const visited = {}
  nums.sort((a, b) => a - b)
  const processor = (combination, nums, visited, start, res) => {
    if (start === nums.length) return res.push(combination)
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue
      const cur = nums[i]
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue
      combination.push(cur)
      visited[i] = true
      processor([...combination], nums, { ...visited }, start + 1, res)
      combination.pop()
      visited[i] = false
    }
  }
  processor([], nums, visited, 0, res)
  return res
}
