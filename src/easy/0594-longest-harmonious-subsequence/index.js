/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  // 统计每个数字出现的次数
  const map = new Map();
  nums.forEach(num => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  let sum = 0;
  let tmp = 0;
  [...map.keys()].forEach(key => {
    // 求出当前数字和比它大一的数字出现的次数之和
    if (map.has(key + 1)) {
      tmp = map.get(key) + map.get(key + 1);
    }
    // 找到最大的和
    sum = Math.max(tmp, sum);
  });
  return sum;
};
