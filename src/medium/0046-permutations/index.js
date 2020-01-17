/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const visited = {}
  const processor = (combination, nums, visited, start, res) => {
    if (start === nums.length) return res.push(combination)
    for (let i = 0; i < nums.length; i++) {
      const cur = nums[i]
      if (visited[i]) continue
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
