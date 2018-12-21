/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const start = 'A'.charCodeAt(0) - 1;
  let res = 0;
  let ret = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    let code = s[i].charCodeAt(0);
    res += (code - start) * ret;
    ret *= 26;
  }
  return res;
};