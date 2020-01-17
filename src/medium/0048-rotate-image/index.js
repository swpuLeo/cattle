/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[n - 1 - j][i]
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
      matrix[j][n - 1 - i] = tmp
    }
  }
};
