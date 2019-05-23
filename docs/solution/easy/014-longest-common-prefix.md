---
sidebar: auto
---

# 014 最长公共前缀

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/longest-common-prefix/)  [力扣](https://leetcode-cn.com/problems/longest-common-prefix/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/LongestCommonPrefix.js)

:::



## 题目描述

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

示例：

```
输入: ["flower","flow","flight"]
输出: "fl"

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**

所有输入只包含小写字母 `a-z` 。



## 解题思路

思路一：

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length || !strs[0].length) return '';
  if (strs.length === 1) return strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].length < i + 1 || strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
