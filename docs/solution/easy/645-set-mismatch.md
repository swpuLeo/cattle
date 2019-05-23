---
sidebar: auto
---

# 645 错误的集合

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/set-mismatch/submissions/)  [力扣](https://leetcode-cn.com/problems/set-mismatch/submissions/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/SetMismatch.js)

:::



## 题目描述

集合 `S` 包含从1到 `n` 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 `nums` 代表了集合 `S` 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

**示例 1:**

```
输入: nums = [1,2,2,4]
输出: [2,3]
```

**注意:**

1. 给定数组的长度范围是 [2, 10000]。
2. 给定的数组是无序的。





## 解题思路

思路一：

```js
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
```



思路二：

```js
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
```





## 相关推荐

我为你挑选的[哈希表](/art/hash.html)题目：
