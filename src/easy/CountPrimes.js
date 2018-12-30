/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const isPrimality = num => {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0) return false
    const limit = Math.floor(Math.sqrt(num))
    for (let divider = 3; divider <= limit; divider += 2) {
      if (num % divider === 0) return false
    }
    return true
  }
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrimality(i)) {
      count += 1
    }
  }
  return count
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let arr = [];
  for (let i = 2; i < n; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (arr[i] !== 0) {
      let j = i * i;
      while (j < n) {
        arr[j] = 0;
        j += i;
      }
    }
  }
  let count = 0;
  arr.forEach(item => {
    if (item && item !== 0) count += 1;
  })
  return count;
};