---
sidebar: auto
---

# 461 汉明距离

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[位运算](/art/bit-manipulation.html)

来源：[LeetCode](https://leetcode.com/problems/hamming-distance/)  [力扣](https://leetcode-cn.com/problems/hamming-distance/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/HammingDistance.js)

:::



## 题目描述

两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。给出两个整数 x 和 y，计算他们之间的汉明距离。注意：0 ≤ x,y ≤ 2³²。

示例如下：

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```



## 解题思路

这个题要求我们求两个整数的二进制不同的个数，我首先想到的是异或运算，可以将两个整数的相同位置 0，不同位置 1。所以我们可以对 x 和 y 做异或运算，然后数出运算结果中 1 的个数就是汉明距离。



对于数 1 的个数，我们可以用除 k 取余法计算。

```js
var hammingDistance = function(x, y) {
  let num = x ^ y;
  let count = 0;
  while (num) {
    count += (num % 2);
    num = Math.floor(num / 2);
  }
  return count;
};
```



可以利用位运算取代除 k 取余法的相应步骤。

```js
var hammingDistance = function(x, y) {
  let num = x ^ y;
  let count = 0;
  while (num) {
    if (num & 1) count += 1;
    num = num >> 1;
  }
  return count;
};
```



对于计算 1 的个数，还有很多方法，以下方法搜集而来。

使用正则表达式，将字符串中的 0 替换为空字符串，返回最终的字符串长度。

```js
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, 2).length;
};
```



通过将异或运算后的字符串逐位相加，相加的结果就是 1 的个数。

```js
var hammingDistance = function(x, y) {
  let diff = x ^ y;
  let count = 0;
  const arr = diff.toString(2).split('');
  arr.forEach(item => count += parseInt(item));
  return count;
};
```



最后，再补充一种方法。我们可以不进行异或运算，而是将 x 和 y 转为二进制，并构造为同等长度的字符串，然后逐位比较。

```js
var hammingDistance = function(x, y) {
  let a = x.toString(2);
  let b = y.toString(2);
  let count = 0;
  while (a.length < b.length) {
    a = '0' + a;
  }
  while (a.length > b.length) {
    b = '0' + b;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count += 1;
    }
  }
  return count;
};
```



## 相关推荐

我为你挑选的关于[位运算](/art/bit-manipulation.html)的题目：

- [100]()
- [111]()
