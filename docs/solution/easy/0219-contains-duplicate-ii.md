# 0219 存在重复元素 II


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | [哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/contains-duplicate-ii/)  [力扣](https://leetcode-cn.com/problems/contains-duplicate-ii/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0219-contains-duplicate-ii.js)






## 题目描述

给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

示例 1:

```
输入: nums = [1,2,3,1], k = 3
输出: true
```



示例 2:

```
输入: nums = [1,0,1,1], k = 1
输出: true
```



示例 3:

```
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
```





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/contains-duplicate-ii
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let j = map.get(nums[i]);
    if (j !== undefined && Math.abs(i - j) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
