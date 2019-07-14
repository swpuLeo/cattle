# 520 检测大写字母

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/detect-capital/)  [力扣](https://leetcode-cn.com/problems/detect-capital/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/DetectCapital.js)

:::



## 题目描述

给定一个单词，你需要判断单词的大写使用是否正确。

我们定义，在以下情况时，单词的大写用法是正确的：

1. 全部字母都是大写，比如"USA"。
2. 单词中所有字母都不是大写，比如"leetcode"。
3. 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。

否则，我们定义这个单词没有正确使用大写字母。

示例：

```
输入: "USA"
输出: True

输入: "FlaG"
输出: False
```

**注意:** 输入是由大写和小写拉丁字母组成的非空单词。



## 解题思路

思路一：

```js
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const isUpperCase = char => {
    const code = char.charCodeAt();
    return code >= 65 && code <= 90;
  }
  const isLowerCase = char => {
    const code = char.charCodeAt();
    return code >= 97 && code <= 122;
  }
  const first = isUpperCase(word[0]);
  const rest = word.slice(1).split('');
  /**
   * 根据第一个字母判断，
   * 如果第一个字母是大写字母，那么剩下的字母应该全是小写字母或者全是大写字母，
   * 如果第一个字母是小写字母，那么剩下的字母应该全是小写字母
   */
  return first
    ? (rest.every(s => isLowerCase(s)) || rest.every(s => isUpperCase(s)))
    : rest.every(s => isLowerCase(s));
};
```

思路二：

```js
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // 思路同上，用循环实现
  let firstUpper = (word[0].toUpperCase() === word[0]);
  let flag = -1; // -1 初始 0 大写 1 小写
  for (let i = 1; i < word.length; i++) {
    if (firstUpper) {
      if (word[i].toUpperCase() === word[i]) {
        if (flag === -1) flag = 0;
        else if (flag === 1) return false;
      } else {
        if (flag === -1) flag = 1;
        else if (flag === 0) return false;
      }
    } else {
      if (word[i].toUpperCase() === word[i]) return false;
    }
  }
  return true;
};
```

思路三：

```js
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return word.toLowerCase() === word // 全小写
    || word.toUpperCase() === word // 全大写
    || (word.slice(0, 1).toUpperCase()  + word.slice(1).toLowerCase() === word); // 第一个字母大写，剩余字母小写
};
```

思路四：

```js
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // 使用正则表达式
  return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word);
};
```



这个题目中所说，所有的字符都是大写或小写字符，所以可以直接使用 `char.toLowerCase() === char` 的方式来判断大小写。严格来说，还是应该使用 ASCII 码来判断大小写字母。大写字母的 ASCII 码区间为 `65-90`，小写字母的 ASCII 码区间为 `97-122`。



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
