/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s
  const first = s && [s[0], '.'].includes(p[0])
  return p.length >= 2 && p[1] === '*'
    ? // 当前 p 的 * 匹配 0 个 or 匹配 1 个
      isMatch(s, p.slice(2)) || (first && isMatch(s.slice(1), p))
    : first && isMatch(s.slice(1), p.slice(1))
}
