# 696 计数二进制子串

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/count-binary-substrings/)  [力扣](https://leetcode-cn.com/problems/count-binary-substrings/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/CountBinarySubstrings.js)

:::



## 题目描述

给定一个字符串 `s`，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

**示例 1 :**

```
输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。

另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
```

**示例 2 :**

```
输入: "10101"
输出: 4
解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
```

**注意：**

- `s.length` 在1到50,000之间。
- `s` 只包含“0”或“1”字符。



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let prev = 0;
  let cur = 1;
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) cur += 1;
    else {
      prev = cur;
      cur = 1;
    }
    if (prev >= cur) count += 1;
  }
  return count;
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
