# 067 二进制求和

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/add-binary/)  [力扣](https://leetcode-cn.com/problems/add-binary/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/AddBinary.js)

:::



## 题目描述

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为**非空**字符串且只包含数字 `1` 和 `0`。

**示例 1:**

```
输入: a = "11", b = "1"
输出: "100"
```

**示例 2:**

```
输入: a = "1010", b = "1011"
输出: "10101"
```



## 解题思路

思路一：

```js

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var len = a.length - b.length;
  var rest0 = '';

  for (var j = 0; j < Math.abs(len); j++) rest0 += '0';

  if (len >= 0) b = rest0 + b;
  else a = rest0 + a;

  var res = '';
  var next = 0;
  for (var i = a.length - 1; i >= 0; i--) {
    var curA = parseInt(a[i]);
    var curB = parseInt(b[i]);
    var curRes = curA + curB + next;
    if (curRes >= 2) {
      next = 1
      if (curRes === 2) {
        res = '0' + res;
      } else if (curRes === 3) {
        res = '1' + res;
      }
    } else {
      next = 0;
      if (curRes === 1) {
        res = '1' + res;
      } else if (curRes === 0) {
        res = '0' + res;
      }
    }
  }
  return next === 0 ? res : next + res;
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
