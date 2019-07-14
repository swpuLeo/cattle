# 0088 合并两个有序数组



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 双指针

来源：[LeetCode](https://leetcode.com/problems/merge-sorted-array/)  [力扣](https://leetcode-cn.com/problems/merge-sorted-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0088-merge-sorted-array.js)






## 题目描述

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例:

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```




::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/merge-sorted-array
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  while(m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n -= 1;
    }
  }
  while(n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n -= 1;
  }
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
