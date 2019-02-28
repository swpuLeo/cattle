/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let c = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        if (i - 1 < 0 || grid[i - 1][j] === 0) c += 1;
        if (i + 1 >= grid.length || grid[i + 1][j] === 0) c += 1;
        if (j - 1 < 0 || grid[i][j - 1] === 0) c += 1;
        if (j + 1 >= grid[0].length ||grid[i][j + 1] === 0) c += 1;
      }
    }
  }
  return c;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let c = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        c += 4;
        c -= i > 0 && grid[i - 1][j] ? 2 : 0;
        c -= j > 0 && grid[i][j - 1] ? 2 : 0;
      }
    }
  }
  return c;
};
