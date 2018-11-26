var reverse = function(x) {
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) return 0
  let ret, res = 0, nag
  if (x < 0) {
    x = Math.abs(x)
    nag = true
  }
  while(x) {
    ret = x % 10
    x = Math.floor(x / 10)
    res += ret
    if (x) {
      res *= 10
    }
  }
  res = (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) ? 0 : res
  return nag ? -res : res
};