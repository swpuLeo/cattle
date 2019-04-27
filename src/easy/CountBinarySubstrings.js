/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let prev = 0;
  let cur = 1;
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) cur += 1;
    else {
      prev = cur;
      cur = 1;
    }
    if (prev >= cur) count += 1;
  }
  return count;
};