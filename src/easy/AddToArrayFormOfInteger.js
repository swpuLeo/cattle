/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  const res = [];
  let i = A.length;
  while (--i >= 0 || K > 0) {
    if (i >= 0) K += A[i];
    res.unshift(K % 10);
    K = Math.floor(K / 10);
  }
  return res;
};
