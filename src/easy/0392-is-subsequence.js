/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s.length) return true
  let i = 0, j = 0
  for (; j < t.length; j++) {
    if (s[i] === t [j]) i += 1
    if (i === s.length) return true
  }
  return false
};
