# 028 实现 strStr()

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/implement-strstr/)  [力扣](https://leetcode-cn.com/problems/implement-strstr/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/Implement-strStr.js)

:::



## 题目描述

实现 [strStr()](https://baike.baidu.com/item/strstr/811469) 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  **-1**。

示例：

```
输入: haystack = "hello", needle = "ll"
输出: 2

输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

**说明:**

当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 `needle` 是空字符串时我们应当返回 0 。这与C语言的 [strstr()](https://baike.baidu.com/item/strstr/811469) 以及 Java的 [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)) 定义相符。



## 解题思路

思路一：

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) return 0;
  let m = haystack.length;
  let n = needle.length;
  if (m < n) return -1;
  for (let i = 0; i <= m - n; i++) {
    let j = 0;
    for (j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === n) return i;
  }
  return -1;
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
