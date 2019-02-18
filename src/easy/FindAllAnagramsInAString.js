/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const map = {};
  for (let i = 0; i < p.length; i++) {
    const cur = p[i];
    if (map[cur] === undefined) map[cur] = 1;
    else map[cur] += 1;
  }
  let curMap = {};
  for (const key in map) {
    curMap[key] = 0;
  }
  const res = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (i < p.length - 1) {
      map[cur] !== undefined && (curMap[cur] += 1);
      continue;
    }
    const lastChar = s[i - p.length];
    if (map[lastChar] !== undefined) {
      curMap[lastChar] -= 1;
    }
    if (map[cur] !== undefined) {
      curMap[cur] += 1;
    }
    if (JSON.stringify(map) === JSON.stringify(curMap)) {
      res.push(i - p.length + 1);
    }
  }
  return res;
};


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let count = p.length;
  let left = 0, right = 0;
  const res = [];
  const arr = (new Array(26)).fill(0);
  for (const char of p) {
    arr[char.charCodeAt() - 97] += 1;
  }
  while (right < s.length) {
    if (arr[s[right++].charCodeAt() - 97]-- >= 1) count -= 1;
    if (count === 0) res.push(left);
    if (right - left === p.length && arr[s[left++].charCodeAt() - 97]++ >= 0) count += 1;
  }
  return res;
};
