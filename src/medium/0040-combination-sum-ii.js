/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const n = candidates.length
  if (!n) return []
  const res = []
  candidates.sort((a, b) => a - b)
  const processor = (combination, sum, start) => {
    if (sum === target) return res.push(combination)
    for (let i = start; i < n; i++) {
      if (i !== start && candidates[i] === candidates[i - 1]) continue
      const cur = candidates[i]
      const accu = sum + cur
      if (accu > target) break
      combination.push(cur)
      processor([...combination], accu, i + 1)
      combination.pop()
    }
  }
  processor([], 0, 0)
  return res
};
