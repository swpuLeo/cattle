/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  const sortFunc = (a, b) => a - b;
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0, j = 0;
  let count = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      count += 1;
      j += 1;
      i += 1;
    } else {
      j += 1;
    }
  }
  return count;
};