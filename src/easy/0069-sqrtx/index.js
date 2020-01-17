/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var init = 1;
  var tmp = 1;
  while(tmp <= x) {
    init += 1;
    tmp = Math.pow(init, 2);
  }
  return init - 1;
};