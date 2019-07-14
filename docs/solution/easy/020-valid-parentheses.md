# 020 有效的括号

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/valid-parentheses/)  [力扣](https://leetcode-cn.com/problems/valid-parentheses/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ValidParentheses.js)

:::



## 题目描述

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

示例：

```
输入: "()"
输出: true

输入: "()[]{}"
输出: true

输入: "(]"
输出: false

输入: "([)]"
输出: false

输入: "{[]}"
输出: true

```



## 解题思路

思路一：

```js
/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  const tmp = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === '(' || cur === '[' || cur === '{') {
      tmp.push(cur);
    } else {
      if (!tmp.length) return false;
      const top = tmp[tmp.length - 1];
      if (cur === ')' && top !== '(') return false;
      if (cur === ']' && top !== '[') return false;
      if (cur === '}' && top !== '{') return false;
      tmp.pop();
    }
  }
  return tmp.length === 0;
 };
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
