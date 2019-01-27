/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * 这里交集的理解：是指两个数组有多少个相同的元素，元素可以重复。
 * 不是数轴上的交集！
 * 不是求两个数组的合并！
 * 更不是求两个数组的合并去重！
 * 比如：[4, 4, 4] 和 [4, 4] 在这里的交集是 [4, 4]！
 *
 */

// 哈希表的解法
// map
var intersect = function(nums1, nums2) {
  const result = [];
  const map = new Map();
  
  if (!nums1.length || !nums2.length) return [];
  
  for (let i = 0, len = nums1.length; i < len; i++) {
    let value = map.get(nums1[i]);
    map.set(nums1[i], (value == null ? 0 : value) + 1);
  }
  
  for (let i = 0, len = nums2.length; i < len; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) !== 0) {
      result.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i]) - 1);
    }
  }
  
  return result;
};

// {} 比 map 更加简洁
var intersect = function(nums1, nums2) {
  const res = [];
  const map = {};
  for (let i = 0; i < nums1.length; i++) {
    const val = map[nums1[i]];
    map[nums1[i]] = !val ? 1 : val + 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      res.push(nums2[i]);
      map[nums2[i]] -= 1;
    }
  }
  return res;
}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 查找
var intersect = function(nums1, nums2) {
  const res = [];
  nums1.forEach(item => {
    const index = nums2.indexOf(item);
    if (index > -1) {
      res.push(item);
      nums2.splice(index, 1);
    }
  });
  return res;
};

// 优化，保证迭代长度较小的那个数组
var intersect = function(nums1, nums2) {
  const res = [];
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  nums1.forEach(item => {
    const index = nums2.indexOf(item);
    if (index > -1) {
      res.push(item);
      nums2.splice(index, 1);
    }
  });
  return res;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 排序
// 双指针
var intersect = function(nums1, nums2) {
  const sortFunc = (prev, cur) => prev - cur;
  nums1.sort(sortFunc);
  nums2.sort(sortFunc);
  const res = [];
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    const item1 = nums1[i];
    const item2 = nums2[j];
    if (item1 > item2) j += 1;
    else if (item2 > item1) i += 1;
    else {
      res.push(item1);
      i += 1;
      j += 1;
    }
  }
  return res;
};