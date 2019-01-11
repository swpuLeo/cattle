/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let sArr = (new Array(26)).fill(0);
  let tArr = (new Array(26)).fill(0);
  for (let i = 0; i < s.length; i++) {
    sArr[s.charCodeAt(i) - 97]++;
    tArr[t.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) sMap[s[i]] = 1;
    else sMap[s[i]] += 1;
    if (!tMap[t[i]]) tMap[t[i]] = 1;
    else tMap[t[i]] += 1;
  }
  return Object.keys(sMap).every(value => sMap[value] === tMap[value]);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s === t || s.length !== t.length) break;
    t = t.replace(new RegExp(s[0], 'g'), '');
    s = s.replace(new RegExp(s[0], 'g'), '');
  }
  return s === t;
};