/**
 * @param {string} s
 * @return {string}
 */
// 超时
var reverseVowels = function(s) {
  const set = new Set('aeiouAEIOU'.split(''));
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (!set.has(arr[left])) {
      left += 1;
    }
    while (!set.has(arr[right])) {
      right -= 1;
    }
    if (left < right && arr[left] !== arr[right]) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left += 1;
      right -= 1;
    }
  }
  return arr.join('');
};


/**
 * @param {string} s
 * @return {string}
 */
// 改进后
var reverseVowels = function(s) {
  const set = new Set('aeiouAEIOU'.split(''));
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (!set.has(arr[left])) {
      left += 1;
    }
    if (!set.has(arr[right])) {
      right -= 1;
    }
    if (set.has(arr[left]) && set.has(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left += 1;
      right -= 1;
    }
  }
  return arr.join('');
};