# 125 验证回文串

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/valid-palindrome/)  [力扣](https://leetcode-cn.com/problems/valid-palindrome/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ValidPalindrome.js)

:::



## 题目描述

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

**说明：**本题中，我们将空字符串定义为有效的回文串。

**示例 1:**

```
输入: "A man, a plan, a canal: Panama"
输出: true
```

**示例 2:**

```
输入: "race a car"
输出: false
```



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0
  let right = s.length - 1
  let alphaNumReg = /[a-zA-Z0-9]/
  let aCode = 'a'.charCodeAt(0)
  while(left < right) {
    if (!alphaNumReg.test(s[left])) left += 1
    else if (!alphaNumReg.test(s[right])) right -= 1
    // 忽略字母大小写的比较
    // toLowerCase()
    else if ((s.charCodeAt(left) + 32 - aCode) % 32 !== (s.charCodeAt(right) + 32 - aCode) % 32) return false
    else {
      left += 1
      right -= 1
    }
  }
  return true
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
