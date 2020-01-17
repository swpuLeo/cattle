/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  return S.split(' ').map((s, i) => {
    // 元音字母的处理方式
    return 'aeiou'.includes(s[0].toLowerCase())
      ? s + 'ma' + 'a'.repeat(i + 1)
      : s.slice(1) + s[0] + 'ma' + 'a'.repeat(i + 1);
  }).join(' ');
};
