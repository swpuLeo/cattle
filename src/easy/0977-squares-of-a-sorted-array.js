/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(a => a * a).sort((a, b) => a - b);
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let left = 0;
  let right = A.length - 1;
  let index = A.length - 1;
  const res = new Array(A.length);
  while (left <= right) {
    if (Math.abs(A[left]) > Math.abs(A[right])) {
      res[index] = A[left] * A[left];
      index -= 1;
      left += 1;
    } else {
      res[index] = A[right] * A[right];
      index -= 1;
      right -= 1;
    }
  }
  return res;
};
