/**
 * https://leetcode-cn.com/problems/word-break/submissions/
 * https://leetcode.com/problems/word-break/submissions/
 */

// 方案一：动态规划

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const len = s.length
  const dp = Array(len + 1).fill(false)
  dp[0] = true
  const wordMap = new Map()
  wordDict.forEach(word => wordMap.set(word, true))
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordMap.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[len]
}
