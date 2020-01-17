/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let count = 0, p = 0;
  for (let i = 0; i < chars.length; i++) {
    count += 1;
    chars[p] = chars[i];
    if (i === chars.length - 1 || chars[i + 1] !== chars[p]) {
      if (count <= 1) p += 1;
      else {
        chars[p++] = chars[i];
        const scount = (count + '').split('');
        for (let j = 0; j < scount.length; j++) {
          chars[p++] = scount[j];
        }
      }
      count = 0;
    }
  }
  return p;
};