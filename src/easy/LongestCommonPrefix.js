/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length || !strs[0].length) return ''

  if (strs.length === 1) return strs[0]

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].length < i + 1 || strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i)
      }
    }
  }
  return strs[0]
};