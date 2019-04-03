/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let left = 0;
  let right = 0;
  const res = [];
  while (right < S.length) {
    if (S[left] === S[right]) {
      right += 1;
    } else {
      if (right - left > 2) {
        res.push([left, right - 1]);
      }
      left = right;
    }
  }
  if ((right === S.length) && (right - left > 2)) {
    res.push([left, right - 1]);
  }
  return res;
};

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  S += 'A';
  let left = 0;
  let right = 0;
  const res = [];
  while (right < S.length) {
    if (S[left] === S[right]) {
      right += 1;
    } else {
      if (right - left > 2) {
        res.push([left, right - 1]);
      }
      left = right;
    }
  }
  return res;
};