/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var len = nums.length;
  var j = -1;
  for (var i = 0; i < len; i++) {
    var cur = nums[i];
    if (cur !== val) {
      j += 1;
      nums[j] = cur;
    }
  }
  return j + 1;
};