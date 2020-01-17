/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  if (!digits) return []
  const res = []
  const processor = (combination, digits) => {
    if (!digits) return res.push(combination)
    const digit = digits[0]
    const letters = map[digit]
    for (let i = 0; i < letters.length; i++) {
      processor(combination + letters[i], digits.slice(1))
    }
  }
  processor('', digits)
  return res
};
