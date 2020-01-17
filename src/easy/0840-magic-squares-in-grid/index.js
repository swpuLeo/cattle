/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let count = 0;
  for (let i = 2; i < row; i++) {
    for (let j = 2; j < col; j++) {
      if (grid[i - 1][j - 1] !== 5) continue;
      if ((grid[i - 2][j - 2] + grid[i - 2][j - 1] + grid[i - 2][j] !== 15)
          || (grid[i - 1][j - 2] + grid[i - 1][j] != 10)
          || (grid[i][j - 2] + grid[i][j - 1] + grid[i][j] !== 15)
          || (grid[i - 2][j - 2] + grid[i - 1][j - 2] + grid[i][j - 2] !== 15)
          || (grid[i-2][j-2] + grid[i-1][j-2] + grid[i][j-2] !== 15)
          || (grid[i-2][j-1] + grid[i][j-1] !== 10)
          || (grid[i-2][j] + grid[i-1][j] + grid[i][j] !== 15)
          || (grid[i-2][j-2] + grid[i][j] !== 10)
          || (grid[i-2][j] + grid[i][j-2] !== 10)
         ) continue;
      if (grid[i-2][j-2] < 1 || grid[i-2][j-1] < 1 || grid[i-2][j] < 1
          || grid[i-1][j-2] < 1 || grid[i-1][j] < 1
          || grid[i][j-2] < 1 || grid[i][j-1] < 1 || grid[i][j] < 1) continue;
      if (grid[i-2][j-2] === 5) continue;
      count += 1;
    }
  }
  return count;
};