/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const cols = A[0].length;
  const res = [];
  for (let col = 0; col < cols; col++) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i][col] > A[i + 1][col]) {
        res.push(col);
        break;
      }
    }
  }
  return res.length;
};

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const cols = A[0].length;
  let count = 0;
  for (let col = 0; col < cols; col++) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i][col] > A[i + 1][col]) {
        count += 1;
        break;
      }
    }
  }
  return count;
};
