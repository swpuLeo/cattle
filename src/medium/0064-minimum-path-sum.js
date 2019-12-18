/**
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * https://leetcode.com/problems/minimum-path-sum/
 */

/**
 * 可以参考：0062 unique-paths 不同路径
 * https://leetcode-cn.com/problems/unique-paths/
 * https://leetcode.com/problems/unique-paths/
 */

// 方案一：动态规划

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid.length
  const col = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 对于边界的处理
      if (i === 0 && j === 0) continue
      else if (i === 0) grid[i][j] = grid[i][j] + grid[i][j - 1]
      else if (j === 0) grid[i][j] = grid[i][j] + grid[i - 1][j]
      else {
        // 状态方程：dp[i][j] = dp[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j])
        grid[i][j] = grid[i][j] + Math.min(grid[i][j - 1], grid[i - 1][j])
      }
    }
  }
  return grid[row - 1][col - 1]
}
