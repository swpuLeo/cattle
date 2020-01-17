/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = new Map();
  const stack = [nums2[0]];
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  const res = [];
  for (let num of nums1) {
    if (map.has(num)) {
      res.push(map.get(num));
    } else {
      res.push(-1);
    }
  }
  return res;
};
