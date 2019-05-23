---
sidebar: auto
---

# 1013 将数组分成和相等的三个部分

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/)  [力扣](https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/PartitionArrayIntoThreePartsWithEqualSum.js)

:::



## 题目描述

给定一个整数数组 `A`，只有我们可以将其划分为三个和相等的非空部分时才返回 `true`，否则返回 `false`。

形式上，如果我们可以找出索引 `i+1 < j` 且满足 `(A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])` 就可以将数组三等分。

 

**示例 1：**

```
输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```

**示例 2：**

```
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```

**示例 3：**

```
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```

 

**提示：**

1. `3 <= A.length <= 50000`
2. `-10000 <= A[i] <= 10000`



## 解题思路

思路一：

```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((prev, next) => prev + next, 0);
  if (sum % 3 !== 0) return false;
  const avg = sum / 3;
  let i = 0;
  let j = A.length - 1;
  let left = 0;
  let right = 0;
  while (i < j) {
    if (left !== avg) {
      left += A[i];
      i += 1;
    }
    if (right !== avg) {
      right += A[j];
      j -= 1;
    }
    if (left === avg && right === avg) return true;
  }
  return false;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
