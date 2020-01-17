/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let firstRowContains0 = false;
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      firstRowContains0 = true;
      break;
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    let thisRowContains0 = false;
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        thisRowContains0 = true;
        matrix[0][j] = 0;
      }
    }
    if (thisRowContains0) {
      for (let j = 0; j < matrix[0].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstRowContains0) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
};
