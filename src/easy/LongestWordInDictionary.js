/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort();
  const set = new Set();
  let res = '';
  words.forEach(word => {
    if (word.length === 1 || set.has(word.slice(0, word.length - 1))) {
      res = word.length > res.length ? word : res;
      set.add(word);
    }
  });
  return res;
};
