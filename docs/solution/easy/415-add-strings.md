---
sidebar: auto
---

# 415 字符串相加

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/add-strings/)  [力扣](https://leetcode-cn.com/problems/add-strings/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/AddStrings.js)

:::



## 题目描述

给定两个字符串形式的非负整数 num1 和 num2，计算它们的和。

注意：

- num1 和 num2 的长度都小于 5100

- num1 和 num2 都只包含数字 0-9

- num1 和 num2 都不包含前导零

- 你不能使用任何内建 BigInteger 库，也直接将输入的字符串转换为整数形式


## 解题思路

这个题目在我的校招面试中遇到两次。首先，肯定不能直接相加，也不能直接转换为数字进行相加，最大 5100 位的数字已经远远超过了 JavaScript 所有精确表示的数字。

本题应该回到加法的本质，按位相加，如果有进位并处理进位。迭代两个字符串，每一位的相加可以表示为 num1[i] + num2 [j] + add（add 表示进位）。这就是整个算法的核心。

接下来，考虑一些细节。两个字符串的长度不一致怎么办？第一种处理方式，是判断 num1 和 num2 的长度，如果 num2 更长，那么交换 num1 和 num2，这样可以确保 num1 更长。外层循环 num1，内层循环 num2。但是这种处理具有 O(n^2) 的时间复杂度。

第二种处理方式，给长度更短的字符串先补前导零，直到两个字符串长度相等。然后，再做依次做加法运算。这样的时间复杂度将降到 O(n)。

最后还有一点细节。如果最后相加的结果长度大于 num1 长度，比如 '99' 和 '9' 相加得到 '108'，那么还应该根据最后是否进位来决定是否给最终结果前前置 '1'。

```js
var addStrings = function(num1, num2) {
  while (num1.length < num2.length) {
    num1 = '0' + num1;
  }
  while (num2.length < num1.length) {
    num2 = '0' + num2;
  }
  let res = '';
  let add = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let cur = parseInt(num1[i]) + parseInt(num2[i]) + add;
    if (cur >= 10) {
      add = 1;
      cur -= 10;
    } else {
      add = 0;
    }
    res = cur + res;
  }
  return add ? '1' + res : res;
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
