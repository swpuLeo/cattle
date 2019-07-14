# 541 反转字符串 II

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/reverse-string-ii/)  [力扣](https://leetcode-cn.com/problems/reverse-string-ii/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ReverseStringII.js)

:::



## 题目描述

给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。

**示例:**

```
输入: s = "abcdefg", k = 2
输出: "bacdfeg"
```

**要求:**

1. 该字符串只包含小写的英文字母。
2. 给定字符串的长度和 k 在[1, 10000]范围内。



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let res = '';
  for (let i = 0; i < s.length; i += 2 * k) {
    res += s.slice(i, i + k).split('').reverse().join('') + s.slice(i + k, i + 2 * k);
  }
  return res;
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
