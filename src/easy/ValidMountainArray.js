/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const length = A.length;
  let flag = false;
  if (length < 3) return false;
  if (A[0] >= A[1]) return false;
  for (let i = 1; i < length - 1; i++) {
    if (!flag) {
      if (A[i] > A[i + 1]) flag = true;
    } else {
      if (A[i] <= A[i + 1]) return false;
    }
  }
  return flag;
};

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const length = A.length;
  const max = Math.max(...A);
  const index = A.indexOf(max);
  if (index === 0 || index === length - 1) return false;
  for (let i = 0; i < index; i ++) {
    if (A[i] >= A[i + 1]) return false;
  }
  for (let i = index; i < length - 1; i++) {
    if (A[i] <= A[i + 1]) return false;
  }
  return true;
};
