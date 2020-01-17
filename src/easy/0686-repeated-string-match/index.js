/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  const end = 2 * A.length + B.length;
  const init = A;
  let count = 1;
  while (A.length < end) {
    if (A.includes(B)) return count;
    A += init;
    count += 1;
  }
  return -1;
};