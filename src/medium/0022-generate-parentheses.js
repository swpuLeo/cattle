/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n < 1) return []
  const res = []
  const processor = (combination, open, close) => {
    if (combination.length === 2 * n)
      return open === close && res.push(combination)
    if (open <= n) {
      processor(combination + '(', open + 1, close)
    }
    if (close < open) {
      processor(combination + ')', open, close + 1)
    }
  }
  processor('(', 1, 0)
  return res
};
