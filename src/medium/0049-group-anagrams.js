/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (!strs || strs.length === 0) return []
  const map = {}
  for (let i = 0; i < strs.length; i++) {
    let cur = strs[i].split('').sort()
    let sortedStr = cur.join('')
    if (!map[sortedStr]) {
      map[sortedStr] = []
    }
    map[sortedStr].push(strs[i])
  }
  const res = []
  for (let key in map) {
    res.push(map[key])
  }
  return res
}
