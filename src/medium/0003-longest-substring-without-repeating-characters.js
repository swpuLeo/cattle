/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  const len = s.length;
  let maxLen = 0;
  for (let i = 0, j = 0; j < len; j++) {
    if (map.has(s[j])) i = Math.max(map.get(s[j]), i);
    map.set(s[j], j + 1);
    maxLen = Math.max(maxLen, j - i + 1);
  }
  return maxLen;
};
