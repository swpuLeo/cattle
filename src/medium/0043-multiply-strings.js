/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const res = []
  for (let i = num1.length - 1; i >= 0; i--) {
    const cur = +num1[i]
    let carry = 0
    let ret = ''
    for (let j = num2.length - 1; j >= 0; j--) {
      const multiply = cur * +num2[j] + carry
      carry = Math.floor(multiply / 10)
      ret = multiply % 10 + ret
    }
    res.push(carry ? carry + ret : ret)
  }
  return res.reduce((prev, next, index) => {
    // 末尾补零
    next += ''.padEnd(index, 0)
    // 保证 next 是较长的字符串
    if (next.length < prev.length) [prev, next] = [next, prev]
    let carry = 0
    let ret = ''
    const diff = next.length - prev.length
    // 遍历长度较长的字符串，注意进位
    for (let i = next.length - 1; i >= 0; i--) {
      // 较短的字符串做处理
      const sum = (+prev[i - diff] || 0) + +next[i] + carry
      carry = Math.floor(sum / 10)
      ret = sum % 10 + ret
    }
    return carry ? carry + ret : ret
  })
};
