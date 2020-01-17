/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let sum = 0;
  const res = [];
  for (let i = 0; i < A.length; i++) {
    sum = (sum * 2 + A[i]) % 5;
    res.push(sum % 5 === 0);
  }
  return res;
};
