/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  const tmp = []
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === '(' || cur === '[' || cur === '{') {
      tmp.push(cur)
    } else {
      if (!tmp.length) return false
 
      const top = tmp[tmp.length - 1]
      if (cur === ')' && top !== '(') return false
      if (cur === ']' && top !== '[') return false
      if (cur === '}' && top !== '{') return false
 
      tmp.pop()
    }
  }
  return tmp.length === 0
 };