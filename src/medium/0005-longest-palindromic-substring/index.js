/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  const dp = Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(s.length).fill(false);
  }
  let maxLen = 1;
  let res = s[0];
  for (let r = 1; r < s.length; r++) {
    for (let l = 0; l < r; l++) {
      if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        const curLen = r - l + 1;
        if (curLen > maxLen) {
          maxLen = curLen;
          res = s.slice(l, r + 1);
        }
      }
    }
  }
  return res;
};
