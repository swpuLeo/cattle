# 0941 有效的山脉数组


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 双指针

来源：[LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/)  [力扣](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0977-squares-of-a-sorted-array.js)






## 题目描述

给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

- A.length >= 3
- 在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[B.length - 1]


示例 1:

```
输入：[2,1]
输出：false
```

示例 2：

```
输入：[3,5,5]
输出：false
```

示例 3：

```
输入：[0,3,2,1]
输出：true
```


提示：

- 0 <= A.length <= 10000
- 0 <= A[i] <= 10000


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/valid-mountain-array/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const length = A.length;
  let flag = false;
  if (length < 3) return false;
  if (A[0] >= A[1]) return false;
  for (let i = 1; i < length - 1; i++) {
    if (!flag) {
      if (A[i] > A[i + 1]) flag = true;
    } else {
      if (A[i] <= A[i + 1]) return false;
    }
  }
  return flag;
};
```


思路二

```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const length = A.length;
  const max = Math.max(...A);
  const index = A.indexOf(max);
  if (index === 0 || index === length - 1) return false;
  for (let i = 0; i < index; i ++) {
    if (A[i] >= A[i + 1]) return false;
  }
  for (let i = index; i < length - 1; i++) {
    if (A[i] <= A[i + 1]) return false;
  }
  return true;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
