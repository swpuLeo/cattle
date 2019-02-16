/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let count = 0;
  let flag = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === ' ') {
      flag = 0;
    }
    if (cur !== ' ' && flag === 0) {
      count += 1;
      flag = 1;
    }
  }
  return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  const arr = s.split(' ');
  let count = 0;
  arr.forEach(item => {
    if (item.trim()) count += 1;
  });
  return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.match(/\S+/g) ? s.match(/\S+/g).length : 0;
};
