# 0035 搜索插入位置



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 二分查找

来源：[LeetCode](https://leetcode.com/problems/search-insert-position/)  [力扣](https://leetcode-cn.com/problems/search-insert-position/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0035-search-insert-position.js)






## 题目描述

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

```
输入: [1,3,5,6], 5
输出: 2
```



示例 2:

```
输入: [1,3,5,6], 2
输出: 1
```



示例 3:

```
输入: [1,3,5,6], 7
输出: 4
```



示例 4:

```
输入: [1,3,5,6], 0
输出: 0
```



::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/search-insert-position/
:::



## 解题思路

思路一：顺序遍历

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    if (target <= cur) return i;
  }
  return i;
};
```



思路二：二分查找

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) { /* = */
    mid = Math.floor((left + right) / 2);
    if (target < nums[mid]) right = mid - 1;
    else if (target > nums[mid]) left = mid + 1;
    else return mid;
  }
  return left;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
