/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowMap = {}
  const colMap = {}
  const blockMap = {}
  for (let i = 0; i < 81; i++) {
    const row = Math.floor(i / 9)
    const col = i % 9
    const block = Math.floor(row / 3) * 3 + Math.floor(col / 3)
    const cur = board[row][col]
    if (cur === '.') continue
    if (!rowMap[row]) rowMap[row] = {}
    if (rowMap[row][cur]) {
      return false
    } else {
      rowMap[row][cur] = true
    }
    if (!colMap[col]) colMap[col] = {}
    if (colMap[col][cur]) {
      return false
    } else {
      colMap[col][cur] = true
    }
    if (!blockMap[block]) blockMap[block] = {}
    if (blockMap[block][cur]) {
      return false
    } else {
      blockMap[block][cur] = true
    }
  }
  return true
}
