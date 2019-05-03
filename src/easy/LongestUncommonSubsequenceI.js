/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a === b) return -1;
  if (a.length < b.length) [a, b] = [b, a];
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (b.indexOf(a.slice(i, j)) === -1) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};
