/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let num = x ^ y;
  let count = 0;
  while (num) {
    count += (num % 2);
    num = Math.floor(num / 2);
  }
  return count;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let num = x ^ y;
  let count = 0;
  while (num) {
    if (num & 1) count += 1;
    num = num >> 1;
  }
  return count;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let diff = x ^ y;
  let count = 0;
  const arr = diff.toString(2).split('');
  arr.forEach(item => count += parseInt(item));
  return count;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, 2).length;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let a = x.toString(2);
  let b = y.toString(2);
  let count = 0;
  while (a.length < b.length) {
    a = '0' + a;
  }
  while (a.length > b.length) {
    b = '0' + b;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count += 1;
    }
  }
  return count;
};
