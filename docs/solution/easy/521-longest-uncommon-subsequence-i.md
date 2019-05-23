---
sidebar: auto

---

# 521 最长特殊序列 I

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/longest-uncommon-subsequence-i/)  [力扣](https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/LongestUncommonSubsequenceI.js)

:::



## 题目描述

给定两个字符串，你需要从这两个字符串中找出最长的特殊序列。最长特殊序列定义如下：该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。

**子序列**可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。

输入为两个字符串，输出最长特殊序列的长度。如果不存在，则返回 -1。

示例：

```
输入: "aba", "cdc"
输出: 3
解析: 最长特殊序列可为 "aba" (或 "cdc")
```

**说明:**

1. 两个字符串长度均小于100。
2. 字符串中的字符仅含有 'a'~'z'。



## 解题思路

思路一：

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a === b) return -1;
  // 需要保证 a 的长度大于 b 的长度
  if (a.length < b.length) [a, b] = [b, a];
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      // 如果在 b 中找不到 a 的子串，则保存一次 max
      if (b.indexOf(a.slice(i, j)) === -1) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};
```

思路二：

其实仔细想一下这个题，如果 a 和 b 不相等的话，那么最长特殊序列不就是 a 和 b 中较长的一个吗？:sweat_smile:

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
