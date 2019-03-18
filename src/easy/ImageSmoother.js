/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  const res = [];
  const row = M.length;
  const col = M[0].length;
  for (let i = 0; i < row; i++) {
    res.push([]);
    for (let j = 0; j < col; j++) {
      let sum = M[i][j];
      let count = 1;
      if (i - 1 >= 0) {
        sum += M[i - 1][j];
        count += 1;
        if (j - 1 >= 0) {
          sum += M[i - 1][j - 1];
          count += 1;
        }
        if (j + 1 < col) {
          sum += M[i - 1][j + 1];
          count += 1;
        }
      }
      if (i + 1 < row) {
        sum += M[i + 1][j];
        count += 1;
        if (j - 1 >= 0) {
          sum += M[i + 1][j - 1];
          count += 1;
        }
        if (j + 1 < col) {
          sum += M[i + 1][j + 1];
          count += 1;
        }
      }
      if (j - 1 >= 0) {
        sum += M[i][j - 1];
        count += 1;
      }
      if (j + 1 < col) {
        sum += M[i][j + 1];
        count += 1;
      }
      let average = Math.floor(sum / count);
      res[i].push(average);
    }
  }
  return res;
};


/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const arr = M.reduce((prev, next) => [...prev, ...next], []);
  const res = [];
  const tmp = [];
  for (let i = 0; i < arr.length; i++) {
    const row = Math.floor(i / M[0].length);
    const col = i % M[0].length;
    
    let count = 0;
    let cur = M[row][col];
    count += 1;
    
    let topLeft = 0;
    if (M[row - 1] !== undefined && M[row - 1][col - 1] !== undefined) {
      topLeft = M[row - 1][col - 1];
      count += 1;
    }
    let top = 0;
    if (M[row - 1] !== undefined && M[row - 1][col] !== undefined) {
      top = M[row - 1][col];
      count += 1;
    }
    let topRight = 0;
    if (M[row - 1] !== undefined && M[row - 1][col + 1] !== undefined) {
      topRight = M[row - 1][col + 1];
      count += 1;
    }
    let left = 0;
    if (M[row] !== undefined && M[row][col - 1] !== undefined) {
      left = M[row][col - 1];
      count += 1;
    }
    let right = 0;
    if (M[row] !== undefined && M[row][col + 1] !== undefined) {
      right = M[row][col + 1];
      count += 1;
    }
    let bottomLeft = 0;
    if (M[row + 1] !== undefined && M[row + 1][col - 1] !== undefined) {
      bottomLeft = M[row + 1][col - 1];
      count += 1;
    }
    let bottom = 0;
    if (M[row + 1] !== undefined && M[row + 1][col] !== undefined) {
      bottom = M[row + 1][col];
      count += 1;
    }
    let bottomRight = 0;
    if (M[row + 1] !== undefined && M[row + 1][col + 1] !== undefined) {
      bottomRight = M[row + 1][col + 1];
      count += 1;
    }
    
    const average = Math.floor((topLeft + top + topRight + left + cur + right + bottomLeft + bottom + bottomRight) / count);
    tmp.push(average);
  }
  const c = M[0].length;
  for (let i = 0; i < Math.floor(tmp.length / c); i++) {
    res.push(tmp.slice(i * c, (i + 1) * c));
  }
  return res;
};

console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]))