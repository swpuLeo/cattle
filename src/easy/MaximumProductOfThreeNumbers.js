/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  if (nums[1] < 0) {
    const head = nums[0] * nums[1];
    const tail = nums[nums.length - 2] * nums[nums.length - 3];
    return (head > tail ? head : tail) * nums[nums.length - 1];
  } else {
    return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if (nums.length === 3) return nums[0] * nums[1] * nums[2];
  // 用于保存最大的三个数
  let maxPos = -1;
  let secPos = -1;
  let thirdPos = -1;
  // 用于保存最小的两个数
  let maxNag = 1;
  let secNag = 1;
  for (const num of nums) {
    if (num >= 0) { // 找到最大的三个数
      if (num > maxPos) {
        thirdPos = secPos;
        secPos = maxPos;
        maxPos = num;
        continue;
      } else if (num > secPos) {
        thirdPos = secPos;
        secPos = num;
        continue;
      } else if (num > thirdPos) {
        thirdPos = num;
        continue;
      }
    } else { // 找到最小的两个数
      if (num < maxNag) {
        secNag = maxNag;
        maxNag = num;
        continue;
      } else if (num < secNag) {
        secNag = num;
      }
    }
  }
  if (secNag < 0) {
    const p1 = maxNag * secNag;
    const p2 = secPos * thirdPos;
    return (p1 > p2 ? p1 : p2) * maxPos;
  }
  return maxPos * secPos * thirdPos;
};
