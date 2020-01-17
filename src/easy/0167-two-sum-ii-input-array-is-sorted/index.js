/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      let res = [left + 1, right + 1];
      return res;
    } else if (numbers[left] + numbers[right] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [];
};


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    let left = i + 1;
    let right = numbers.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (diff < numbers[mid]) right = mid - 1;
      else if (diff > numbers[mid]) left = mid + 1;
      else {
        result.push(i + 1);
        result.push(mid + 1);
        break;
      }
    }
  }
  return result;
};