/**
 * https://leetcode-cn.com/problems/unique-paths/
 * https://leetcode.com/problems/unique-paths/
 */

// 方案一：动态规划
// 空间复杂度 O(m * n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 构造一个 m x n 的二维数组
  const dp = Array(m).fill(Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 对于边界的处理
      if (i === 0 || j === 0) dp[i][j] = 1
      // 当前格子 = 左边 + 上边
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

// 优化：压缩空间
// 空间复杂度 O(2n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 由于达到当前格子，只会与当前行和上一行相关
  // 所以这里只保留两行的数组，即 2n
  let pre = Array(n).fill(1)
  let cur = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] = cur[j - 1] + pre[j]
    }
    pre = [...cur]
  }
  return pre[n - 1]
}

// 继续压缩空间
// 空间复杂度 O(n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let cur = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] += cur[j - 1]
    }
  }
  return cur[n - 1]
}
