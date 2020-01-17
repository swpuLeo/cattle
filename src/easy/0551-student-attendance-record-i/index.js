/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  // 直接统计
  let countA = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') countA += 1;
    if (countA > 1) return false;
    if (s[i - 1] === 'L' && s[i] === 'L' && s[i + 1] === 'L') return false;
  }
  return true;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  // 使用正则表达式
  return (s.match(/A/g) || []).length <= 1
    && (s.match(/L{3}/g) || []).length === 0;
};
