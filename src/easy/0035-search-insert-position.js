/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var cur = nums[i];
    if (target <= cur) {
      return i;
    }
  }
  return i;
};