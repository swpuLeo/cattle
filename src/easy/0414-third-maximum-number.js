/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first = nums[0];
  let second = nums[0];
  let third = nums[0];
  nums.forEach(num => {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if ((num !== first) && (num > second || second === first)) {
      third = second;
      second = num;
    } else if ((num !== first && num !== second) && (num > third || third === second || third === first)) {
      third = num;
    }
  });
  return (first > second && second > third)
    ? third : first;
};
