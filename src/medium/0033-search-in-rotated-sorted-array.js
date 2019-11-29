/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const find = (nums, low, high, target) => {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < nums[high]) {
      // 右半部分有序
      if (nums[mid] < target && target <= nums[high]) {
        return find(nums, mid + 1, high, target);
      } else {
        return find(nums, low, mid - 1, target);
      }
    } else {
      // 左半部分有序
      if (nums[low] <= target && target < nums[mid]) {
        return find(nums, low, mid - 1, target);
      } else {
        return find(nums, mid + 1, high, target);
      }
    }
  };
  return find(nums, 0, nums.length - 1, target);
};
