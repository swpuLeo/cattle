/**
 * https://leetcode-cn.com/problems/unique-binary-search-trees/
 * https://leetcode-cn.com/problems/unique-binary-search-trees/
 */

// 方案一：动态规划

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
}
