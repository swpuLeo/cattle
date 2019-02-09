/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) return '0';
  const hex = '0123456789abcdef';
  let ans = '';
  for (let i = 0; i < 8; i++) {
    const n = num & 15;
    ans = hex[n] + ans;
    num = num >> 4;
  }
  return ans.replace(/^[0]*/g, '');
};

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) return '0';
  // const MAX_SAFE_INTEGER = Math.pow(2, 32) - 1;
  if (num < 0) {
    // num += MAX_SAFE_INTEGER + 1;
    num += 4294967296;
  }
  const hex = 'abcdef';
  let res = '';
  while(num) {
    const ret = num % 16;
    res = ((ret >= 10) ? hex[ret - 10] : ret) + res;
    num = Math.floor(num / 16);
  }
  return res;
};
