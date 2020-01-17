/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let count = 0;
  let res = '';
  let start = 0;
  for (let i = 0; i < S.length; i++) {
    const cur = S[i];
    if (cur === '(') count += 1;
    else count -= 1;
    if (count === 0) {
      res += S.slice(start + 1, i);
      start = i + 1;
    }
  }
  return res;
};
