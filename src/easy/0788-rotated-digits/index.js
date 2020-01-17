/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let count = 0;
  for (let i = 2; i <= N; i++) {
    let s = i.toString();
    s = s.replace(/0+|1+|8+/g, '');
    if (s) {
      s = s.replace(/2+|5+|6+|9+/g, '');
      if (!s) count += 1;
    }
  }
  return count;
};
