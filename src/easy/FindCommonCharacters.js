/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const list = [];
  const res = Array(26).fill(0);
  for (let c of A[0]) {
    res[c.charCodeAt() - 97] += 1;
  }
  for (let i = 1; i < A.length; i++) {
    const tmp = Array(26).fill(0)
    for (let c of A[i]) {
      tmp[c.charCodeAt() - 97] += 1;
    }
    for (let j = 0; j < 26; j++) {
      res[j] = Math.min(res[j], tmp[j]);
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] > 0) {
      for (let j = 0; j < res[i]; j++) {
        list.push(String.fromCharCode(97 + i));
      }
    }
  }
  return list;
};
