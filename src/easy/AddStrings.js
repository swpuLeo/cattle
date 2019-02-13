/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  while (num1.length < num2.length) {
    num1 = '0' + num1;
  }
  while (num2.length < num1.length) {
    num2 = '0' + num2;
  }
  let res = '';
  let add = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let cur = parseInt(num1[i]) + parseInt(num2[i]) + add;
    if (cur >= 10) {
      add = 1;
      cur -= 10;
    } else {
      add = 0;
    }
    res = cur + res;
  }
  return add ? '1' + res : res;
};
