/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set(nums1);
  const res = new Set();
  nums2.forEach(item => {
    if (set.has(item)) res.add(item);
  });
  return [...res];
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter(item => nums2.includes(item)))];
};