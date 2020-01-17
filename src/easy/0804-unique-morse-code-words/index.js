/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const set = new Set();
  words.forEach(word => {
    let str = '';
    for (let w of word) {
      str += morse[w.charCodeAt() - 97];
    }
    set.add(str);
  });
  return set.size;
};
