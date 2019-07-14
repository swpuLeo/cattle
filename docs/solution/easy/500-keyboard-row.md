# 500 键盘行

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/keyboard-row/)  [力扣](https://leetcode-cn.com/problems/keyboard-row/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/KeyboardRow.js)

:::



## 题目描述

给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。

![Keyboard Image](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/500-illustration.png)



**示例：**

```
输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
```

**注意：**

1. 你可以重复使用键盘上同一字符。
2. 你可以假设输入的字符串将只包含字母。





## 解题思路

思路一：

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  return words.filter(word => {
    return [/^[qwertyuiop]+$/, /^[asdfghjkl]+$/, /^[zxcvbnm]+$/]
      .some(reg => reg.test(word.toLowerCase()));
  });
};
```



思路二：

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const first = 'qwertyuiop';
  const second = 'asdfghjkl';
  const third = 'zxcvbnm';
  return words.filter(word => {
    if (first.includes(word[0].toLowerCase())) {
      return word.split('').every(w => first.includes(w.toLowerCase()));
    } else if (second.includes(word[0].toLowerCase())) {
      return word.split('').every(w => second.includes(w.toLowerCase()));
    } else {
      return word.split('').every(w => third.includes(w.toLowerCase()));
    }
  });
};
```





## 相关推荐

我为你挑选的[哈希表](/art/hash.html)题目：
