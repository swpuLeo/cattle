/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  let index = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) !== null) {
      map.set(s[i], null);
    }
    if (!map.has(s[i])) {
      map.set(s[i], i);
    }
  }
  [...map.keys()].forEach(item => {
    if (map.get(item) !== null) {
      if (map.get(item) < index) {
        index = map.get(item);
      }
    }
  });
  return index === Infinity ? -1 : index;
};


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const pattern = 'abcdefghijklmnopqrstuvwxyz';
  let index = s.length;
  for (let i = 0; i < pattern.length; i++) {
    let tmp = s.indexOf(pattern[i]);
    if (tmp !== -1 && tmp === s.lastIndexOf(pattern[i])) {
      if (tmp < index) {
        index = tmp;
      }
    }
  }
  return index === s.length ? -1 : index;
};
