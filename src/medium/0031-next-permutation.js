/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const reverse = (nums, i) => {
    let j = nums.length - 1;
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
      j -= 1;
    }
  };
  // 找到凹下去的那个数的位置
  // （从末尾开始找，直到前一个数比当前数小的位置）
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i -= 1;
  }
  // 如果 i < 0，说明排列是降序的，直接反转
  if (i >= 0) {
    // 找到 [i + 1, length - 1] 这个子序列中刚好比 nuums[i] 大的数
    // 然后进行交换
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j -= 1;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 交换后，在将 [i + 1, length - 1] 这个子序列反转
  reverse(nums, i + 1);
  return nums;
};
