/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let increase = 0;
  let decrease = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] >= A[i + 1]) decrease += 1;
    if (A[i] <= A[i + 1]) increase += 1;
  }
  if (increase === A.length - 1 || decrease === A.length - 1) return true;
  return false;
};
