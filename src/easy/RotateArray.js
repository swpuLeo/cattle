/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverse = (start, end) => {
    while(start < end) {
      const tmp = nums[start];
      nums[start++] = nums[end];
      nums[end--] = tmp;
    }
  }
  if (nums) {
    const last = nums.length - 1;
    k = k % (last + 1);
    reverse(0, last - k);
    reverse(last - k + 1, last);
    reverse(0, last);
  }
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   k = k % nums.length;
//   let start = 0;
//   let cur = k;
//   while (cur) {
//     let tmp = nums[cur];
//     nums[cur] = nums[start];
//     start = cur;
//     nums[start] = tmp;
//     cur = cur + k > nums.length - 1 ? 
//       cur + k - nums.length - 1 : 
//       cur + k;
//   }
//   return nums;
// }

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 超时
var rotate = function(nums, k) {
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    let tail = nums.pop();
    nums.unshift(tail);
  }
};

var rotate = function(nums, k) {
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    nums.splice(0, 0, nums.splice(nums.length - 1, 1));
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  let count = 0;
  for (let start = 0; count < nums.length; start++) {
    let cur = start;
    let prevEl = nums[start];
    do {
      cur = (cur + k) % nums.length;
      let tmp = nums[cur];
      nums[cur] = prevEl;
      prevEl = tmp;
      count += 1;
    } while (start !== cur);
  }
}