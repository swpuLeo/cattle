/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  let maxLen = 0;
  let hasOdd = false;
  [...map.keys()].forEach(key => {
    if (map.get(key) % 2 === 0) {
      maxLen += map.get(key);
    } else {
      hasOdd = true
      maxLen += map.get(key) - 1;
    }
  });
  return maxLen + (hasOdd ? 1 : 0);
};