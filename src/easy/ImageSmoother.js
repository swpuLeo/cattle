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
var imageSmoother = function (M) {
  // 将二维矩阵降维
  const arr = M.reduce((prev, next) => [...prev, ...next], []);
  const res = []; // 结果矩阵，二维
  const tmp = []; // 灰度数组，一维
  const r = M.length;
  const c = M[0].length;
  for (let i = 0; i < arr.length; i++) {
    const row = Math.floor(i / c);
    const col = i % c;
    let sum = M[row][col];
    let count = 1;
    if (row - 1 >= 0) {
      sum += M[row - 1][col];
      count += 1;
      if (col - 1 >= 0) {
        sum += M[row - 1][col - 1];
        count += 1;
      }
      if (col + 1 < c) {
        sum += M[row - 1][col + 1];
        count += 1;
      }
    }
    if (row + 1 < r) {
      sum += M[row + 1][col];
      count += 1;
      if (col - 1 >= 0) {
        sum += M[row + 1][col - 1];
        count += 1;
      }
      if (col + 1 < c) {
        sum += M[row + 1][col + 1];
        count += 1;
      }
    }
    if (col - 1 >= 0) {
      sum += M[row][col - 1];
      count += 1;
    }
    if (col + 1 < c) {
      sum += M[row][col + 1];
      count += 1;
    }
    const average = Math.floor(sum / count);
    tmp.push(average);
  }
  // 将一维数组转为二维
  for (let i = 0; i < Math.floor(tmp.length / c); i++) {
    res.push(tmp.slice(i * c, (i + 1) * c));
  }
  return res;
};