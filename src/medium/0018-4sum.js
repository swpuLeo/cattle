/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (!nums.length) return [];
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const tmpTarget = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const tmpTarget2 = tmpTarget - nums[j];
      let m = j + 1;
      let n = nums.length - 1;
      while (m < n) {
        if (nums[m] + nums[n] === tmpTarget2) {
          res.push([nums[i], nums[j], nums[m], nums[n]]);
          while (m < n && nums[m] === nums[m + 1]) m += 1;
          while (m < n && nums[m] === nums[n + 1]) n -= 1;
          m += 1;
          n -= 1;
        } else if (nums[m] + nums[n] < tmpTarget2) m += 1;
        else n -= 1;
      }
    }
  }
  return res;
};
