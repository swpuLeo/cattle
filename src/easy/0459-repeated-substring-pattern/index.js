/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length <= 1) return false;
  for (const [index, item] of [...s].entries()) {
    if (index >= s.length / 2) break;
    const sub = s.slice(0, index + 1);
    const times = s.length / sub.length;
    if (sub.repeat(times) === s) return true;
  }
  return false;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  for (let i = 2; i <= s.length; i++) {
    if (s.length % i === 0) {
      const len = s.length / i;
      const sub = s.substr(0, len);
      let diff = false;
      for (let j = 1; j < i; j++) {
        const cur = s.substr(j * len, len);
        if (cur !== sub) {
          diff = true;
          break;
        }
      }
      if (!diff) return true;
    }
  }
  return false;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, -1).includes(s);
};
