/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // Here is my code.
  const isUpperCase = char => {
    const code = char.charCodeAt();
    return code >= 65 && code <= 90;
  }
  const isLowerCase = char => {
    const code = char.charCodeAt();
    return code >= 97 && code <= 122;
  }
  const first = isUpperCase(word[0]);
  const rest = word.slice(1).split('');
  /**
   * 根据第一个字母判断，
   * 如果第一个字母是大写字母，那么剩下的字母应该全是小写字母或者全是大写字母，
   * 如果第一个字母是小写字母，那么剩下的字母应该全是小写字母
   */
  return first
    ? (rest.every(s => isLowerCase(s)) || rest.every(s => isUpperCase(s)))
    : rest.every(s => isLowerCase(s));
};


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // 思路同上，用循环实现
  let firstUpper = (word[0].toUpperCase() === word[0]);
  let flag = -1; // -1 初始 0 大写 1 小写
  for (let i = 1; i < word.length; i++) {
    if (firstUpper) {
      if (word[i].toUpperCase() === word[i]) {
        if (flag === -1) flag = 0;
        else if (flag === 1) return false;
      } else {
        if (flag === -1) flag = 1;
        else if (flag === 0) return false;
      }
    } else {
      if (word[i].toUpperCase() === word[i]) return false;
    }
  }
  return true;
};


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return word.toLowerCase() === word // 全小写
    || word.toUpperCase() === word // 全大写
    || (word.slice(0, 1).toUpperCase()  + word.slice(1).toLowerCase() === word); // 第一个字母大写，剩余字母小写
};


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // 使用正则表达式
  return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word);
};
