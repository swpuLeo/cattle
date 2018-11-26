/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (!digits) return null
  const length = digits.length
  if (length < 1) return null
  if (digits[0] === 0 && length > 1) return null
  for (let i = length - 1; i >= 0; i--) {
    digits[i] += 1
    if (digits[i] <= 9) {
      return digits
    } else if (digits[i] === 10) {
      digits[i] = 0
    }
    if (i === 0) {
      digits.unshift(1)
      return digits
    }
  }
  return null
};