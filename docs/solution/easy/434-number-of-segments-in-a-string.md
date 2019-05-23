---
sidebar: auto
---

# 434 字符串中的单词数

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/number-of-segments-in-a-string/)  [力扣](https://leetcode-cn.com/problems/number-of-segments-in-a-string/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/NumberOfSegmentsInAString.js)

:::



## 题目描述

统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。你可以假定字符串中不包含任何不可打印字符。

示例如下：

```
输入: "Hello, my name is John"
输出: 5
```



## 解题思路

思路一，利用一个标志记录空格字符是否出现。迭代字符串，当空格字符出现时，标志位置 0，否则，标志位置 1。如果当前字符不是空格，并且标志位为 0，那么单词计数加一。

```js
var countSegments = function(s) {
  let count = 0;
  let flag = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === ' ') {
      flag = 0;
    }
    if (cur !== ' ' && flag === 0) {
      count += 1;
      flag = 1;
    }
  }
  return count;
};
```

思路二，利用 JS 中字符串的 split() 方法，按照空格分割为数组。对数组进行迭代，如果数组项去掉空格后不为空，那么单词计数加一。

```js
var countSegments = function(s) {
  const arr = s.split(' ');
  let count = 0;
  arr.forEach(item => {
    if (item.trim()) count += 1;
  });
  return count;
};
```

思路三，正则表达式。

```js
var countSegments = function(s) {
  return s.match(/\S+/g) ? s.match(/\S+/g).length : 0;
};
```


## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
