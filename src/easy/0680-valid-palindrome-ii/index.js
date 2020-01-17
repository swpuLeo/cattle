/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const isValid = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left += 1;
      right -= 1;
    }
    return true;
  }
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return isValid(s, left + 1, right) || isValid(s, left, right - 1);
    left += 1;
    right -= 1;
  }
  return true;
};