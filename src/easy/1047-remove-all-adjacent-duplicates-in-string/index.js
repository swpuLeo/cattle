/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const stack = []
  for (let i of S) {
    if (i === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(i)
    }
  }
  return stack.join('')
}
