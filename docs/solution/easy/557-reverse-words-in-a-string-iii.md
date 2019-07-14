# 557 反转字符串中的单词 III

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/reverse-words-in-a-string-iii/)  [力扣](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ReverseWordsInAStringIII.js)

:::



## 题目描述

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

**示例 1:**

```
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"
```



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
