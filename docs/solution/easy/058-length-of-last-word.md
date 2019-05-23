---
sidebar: auto
---

# 058 最后一个单词的长度

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/length-of-last-word/)  [力扣](https://leetcode-cn.com/problems/length-of-last-word/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/LengthOfLastWorld.js)

:::



## 题目描述

给定一个仅包含大小写字母和空格 `' '` 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

**说明：**一个单词是指由字母组成，但不包含任何空格的字符串。

**示例:**

```
输入: "Hello World"
输出: 5
```



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) return 0;
  s = s.trim();
  var len = s.length;
  var result = 0;
  for (var i = len - 1; i >= 0; i--) {
    var cur = s[i];
    if (cur !== ' ') {
      result += 1;
    } else {
      break;
    }
  }
  return result;
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：