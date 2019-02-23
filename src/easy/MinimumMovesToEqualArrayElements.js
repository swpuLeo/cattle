/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let min = Infinity;
  let count = 0;
  nums.forEach(item => min = item < min ? item : min);
  nums.forEach(item => count += (item - min));
  return count;
};