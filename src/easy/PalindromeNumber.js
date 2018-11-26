var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  var tmp = x;
  var reverseX = 0;
  while(tmp) {
    var ret = tmp % 10;
    tmp = Math.floor(tmp / 10);
    reverseX += ret;
    if (tmp) {
      reverseX *= 10;
    }
  }
  return reverseX === x;
};