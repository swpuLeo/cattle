/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  return words.filter(word => {
    return [/^[qwertyuiop]+$/, /^[asdfghjkl]+$/, /^[zxcvbnm]+$/]
      .some(reg => reg.test(word.toLowerCase()));
  });
};


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const first = 'qwertyuiop';
  const second = 'asdfghjkl';
  const third = 'zxcvbnm';
  return words.filter(word => {
    if (first.includes(word[0].toLowerCase())) {
      return word.split('').every(w => first.includes(w.toLowerCase()));
    } else if (second.includes(word[0].toLowerCase())) {
      return word.split('').every(w => second.includes(w.toLowerCase()));
    } else {
      return word.split('').every(w => third.includes(w.toLowerCase()));
    }
  });
};
