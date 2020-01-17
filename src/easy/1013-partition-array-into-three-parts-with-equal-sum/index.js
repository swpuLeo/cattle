/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((prev, next) => prev + next, 0);
  if (sum % 3 !== 0) return false;
  const avg = sum / 3;
  let i = 0;
  let j = A.length - 1;
  let left = 0;
  let right = 0;
  while (i < j) {
    if (left !== avg) {
      left += A[i];
      i += 1;
    }
    if (right !== avg) {
      right += A[j];
      j -= 1;
    }
    if (left === avg && right === avg) return true;
  }
  return false;
};
