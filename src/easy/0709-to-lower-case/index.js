/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(code + 32);
    } else {
      res += str[i];
    }
  }
  return res;
};
