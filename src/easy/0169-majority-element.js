/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//   return nums.sort((item1, item2) => item1 - item2)[Math.floor(nums.length / 2)];  
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1;
  let cur = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (cur === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0) {
      cur = nums[i];
      count = 1;
    }
  }
  return cur;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//   const map = {};
//   const max = Math.floor(nums.length / 2);
//   for (let i = 0; i < nums.length; i++) {
//     let cur = nums[i];
//     if (!map[cur]) map[cur] = 1;
//     else map[cur] += 1;
//     if (map[cur] > max) return cur;
//   }
// };
