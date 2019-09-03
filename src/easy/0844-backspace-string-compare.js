/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s = [], t = [];
  for (let i of S) {
    if (i !== '#') s.push(i);
    else if (i === '#' && s.length) s.pop();
  }
  for (let j of T) {
    if (j !== '#') t.push(j);
    else if (j === '#' && t.length) t.pop();
  }
  return s.join('') === t.join('');
};
