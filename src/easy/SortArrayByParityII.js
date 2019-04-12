/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const odd = A.filter(a => a % 2 !== 0);
  const even = A.filter(a => a % 2 === 0);
  const res = [];
  for (let i = 0; i < odd.length; i++) {
    res.push(even[i], odd[i]);
  }
  return res;
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let i = 0;
  let j = 1;
  while (i < A.length && j < A.length) {
    if (A[i] % 2 === 0) {
      i += 2;
    }
    if (A[j] % 2 === 1) {
      j += 2;
    }
    if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      [A[i], A[j]] = [A[j], A[i]];
      i += 2;
      j += 2;
    }
  }
  return A;
};
