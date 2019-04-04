/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  const res = [];
  A.forEach(sub => res.push(sub.reverse().map(item => item === 1 ? 0 : 1)));
  return res;
};
