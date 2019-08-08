# 0724 寻找数组的中心索引


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/find-pivot-index/)  [力扣](https://leetcode-cn.com/problems/find-pivot-index/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0724-find-pivot-index.js)






## 题目描述

给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。


示例 1:

```
输入: nums = [1, 7, 3, 6, 5, 6]
输出: 3
解释: 索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
同时, 3 也是第一个符合要求的中心索引。
```

示例 2：

```
输入: nums = [1, 2, 3]
输出: -1
解释: 数组中不存在满足此条件的中心索引。
```


注意:
- nums 的长度范围为 [0, 10000]。
- 任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/find-pivot-index/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum = nums.slice(0, i).reduce((prev, next) => prev + next, 0);
    rightSum = nums.slice(i + 1).reduce((prev, next) => prev + next, 0);
    if (leftSum === rightSum) return i;
  }
  return -1;
};
```


思路二

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((prev, next) => prev + next, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
