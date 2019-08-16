/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const res = [...Array(A[0].length)].map(() => Array(A.length));
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length; j++) {
      res[i][j] = A[j][i];
    }
  }
  return res;
};

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  return A[0].map((item, index) => A.map(sub => sub[index]));
};
