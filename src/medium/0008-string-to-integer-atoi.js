/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let length = str.length
  if (!length) return 0

  let sign = 1
  let base = 0
  let i = 0
  const INT_MAX = Math.pow(2, 31) - 1
  const INT_MIN = -Math.pow(2, 31)
  const limit = Math.floor(INT_MAX / 10)

  while(i < length && str[i] === ' ') i += 1

  if (str[i] === '+' || str[i] === '-') {
    sign = (str[i++] === '+') ? 1 : -1
  }

  while(i < length && str[i] >= '0' && str[i] <= '9') {
    if (base > limit || (base === limit && str[i] - '0' > 7)) {
      return sign === 1 ? INT_MAX : INT_MIN
    }
    base = 10 * base + (str[i++] - '0')
  }
  return base * sign
};
