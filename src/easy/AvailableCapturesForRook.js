/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let count = 0;
  let flag = false;
  let i = 0;
  let j = 0;
  // 找到车的位置
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  for (let k = j + 1; k < board[0].length; k++) {
    if (board[i][k] === '.') continue;
    if (board[i][k] === 'B') break;
    if (board[i][k] === 'p') {
      count += 1;
      break;
    }
  }
  for (let k = j - 1; k >= 0; k--) {
    if (board[i][k] === '.') continue;
    if (board[i][k] === 'B') break;
    if (board[i][k] === 'p') {
      count += 1;
      break;
    }
  }
  for (let k = i + 1; k < board.length; k++) {
    if (board[k][j] === '.') continue;
    if (board[k][j] === 'B') break;
    if (board[k][j] === 'p') {
      count += 1;
      break;
    }
  }
  for (let k = i - 1; k >= 0; k--) {
    if (board[k][j] === '.') continue;
    if (board[k][j] === 'B') break;
    if (board[k][j] === 'p') {
      count += 1;
      break;
    }
  }
  return count;
};
