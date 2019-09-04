# 0496 下一个更大元素 I


## 题目导航

难度：[简单](/solution/easy/)

分类：[栈](/art/stack.html)

来源：[LeetCode](https://leetcode.com/problems/next-greater-element-i/)  [力扣](https://leetcode-cn.com/problems/next-greater-element-i/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0496-next-greater-element-i.js)






## 题目描述

给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

示例 1：

```
输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
```

示例 2：

```
输入: nums1 = [2,4], nums2 = [1,2,3,4].
输出: [3,-1]
解释:
    对于num1中的数字2，第二个数组中的下一个较大数字是3。
    对于num1中的数字4，第二个数组中没有下一个更大的数字，因此输出 -1。
```


注意:

- nums1和nums2中所有元素是唯一的。
- nums1和nums2 的数组大小都不超过1000。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/next-greater-element-i
:::



## 解题思路


思路一

```js
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
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
