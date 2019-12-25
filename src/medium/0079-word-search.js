/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const row = board.length
  const col = board[0].length
  // visited 保存访问记录
  const visited = Array(row)
  // 这里不能通过 fill 来生成二维数组
  // ------ --------
  // const visited = Array(row).fill(Array(col).fill(false))
  // ------ --------
  // 因为[ [], [] ] 中的数组索引一致
  for (let i = 0; i < row; i++) {
    visited[i] = Array(col)
    for (let j = 0; j < col; j++) {
      visited[i][j] = false
    }
  }
  // deepClone 辅助函数，深度拷贝 visited
  const deepClone = obj => JSON.parse(JSON.stringify(obj))
  // 回溯
  const processor = (i, j, idx, word, visited, board) => {
    // 已经匹配到 word 的最后一位，匹配成功
    if (idx === word.length) return true
    // 否则
    // 如果越界、如果当前字符不匹配、如果已经访问过
    // 三种情况都匹配失败
    if (
      i < 0 ||
      i >= row ||
      j < 0 ||
      j >= col ||
      word[idx] !== board[i][j] ||
      visited[i][j]
    )
      return false
    // 标记访问状态
    visited[i][j] = true
    // 递归当前格子的上下左右四个方向，任意方向满足即匹配成功
    if (
      processor(i - 1, j, idx + 1, word, deepClone(visited), board) ||
      processor(i + 1, j, idx + 1, word, deepClone(visited), board) ||
      processor(i, j - 1, idx + 1, word, deepClone(visited), board) ||
      processor(i, j + 1, idx + 1, word, deepClone(visited), board)
    )
      return true
    // 重置访问状态
    visited[i][j] = false
    return false
  }
  // 迭代 board
  // board[i][j] 与 word 的第一个字符相同
  // 就可以进行递归查找
  // 并且递归匹配到了 word
  // 那么就可以返回 true
  // 否则继续迭代 board
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (word[0] === board[i][j] && processor(i, j, 0, word, visited, board)) {
        return true
      }
    }
  }
  // 迭代结束，没有匹配
  return false
}
