/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let tmp = 0;
  nums.forEach(item => {
    if (item === 1) tmp += 1;
    else {
      max = Math.max(max, tmp);
      tmp = 0;
    }
  });
  return Math.max(max, tmp);
};
