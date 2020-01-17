/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  // 构建一个数组项是从 1 ~ nums.length 的连续数组
  const arr = [...Array(nums.length)].map((i, v) => v + 1);
  let first;
  // 迭代 nums
  nums.forEach(num => {
    // 如果 num 在 arr 中，就从 arr 中删除
    if (arr.includes(num)) {
      arr.splice(arr.indexOf(num), 1);
    } else {
      // 否则 num 就是重复的数字
      first = num;
    }
  });
  // 而 arr 中剩下的一个就是丢失的数字
  return [first, arr.pop()];
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let repeat;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // 数组元素为 1 ~ n
    // sum 每次加上 i + 1
    sum += i + 1;
    // 找到对应的下标
    // 为什么不直接用 i，因为数组是乱序的
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) { // 说明这个数字没有被使用
      sum -= index + 1;
      nums[index] *= -1; // 将数字标记为负，表示已访问
    } else {
      repeat = index + 1; // 出现为负的，那么就是被标记的
    }
  }
  return [repeat, sum];
};
