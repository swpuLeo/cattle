/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      return t[i];
    } else {
      const count = map.get(t[i]);
      if (count > 0) {
        map.set(t[i], count - 1);
      } else if (count === 0) {
        return t[i];
      }
    }
  }
};


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return tArr[i];
    }
  }
  return tArr[tArr.length - 1];
};


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let res = t.charCodeAt(0);
  for (let i = 0; i < t.length; i++) {
    res = res ^ s.charCodeAt(i) ^ t.charCodeAt(i + 1);
  }
  return String.fromCharCode(res);
};


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const str = s + t;
  let res = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    res = res ^ str.charCodeAt(i);
  }
  return String.fromCharCode(res);
};
