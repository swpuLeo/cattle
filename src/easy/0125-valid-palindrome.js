/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0
  let right = s.length - 1
  let alphaNumReg = /[a-zA-Z0-9]/
  let aCode = 'a'.charCodeAt(0)
  while (left < right) {
    if (!alphaNumReg.test(s[left])) left += 1
    else if (!alphaNumReg.test(s[right])) right -= 1
    // 忽略字母大小写的比较
    // toLowerCase()
    else if (
      (s.charCodeAt(left) + 32 - aCode) % 32 !==
      (s.charCodeAt(right) + 32 - aCode) % 32
    )
      return false
    else {
      left += 1
      right -= 1
    }
  }
  return true
}
