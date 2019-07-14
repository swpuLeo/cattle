# 720 词典中最长的单词

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/longest-word-in-dictionary/)  [力扣](https://leetcode-cn.com/problems/longest-word-in-dictionary/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/LongestWordInDictionary.js)

:::



## 题目描述

给出一个字符串数组`words`组成的一本英语词典。从中找出最长的一个单词，该单词是由`words`词典中其他单词逐步添加一个字母组成。若其中有多个可行的答案，则返回答案中字典序最小的单词。

若无答案，则返回空字符串。

**示例 1:**

```
输入:
words = ["w","wo","wor","worl", "world"]
输出: "world"
解释:
单词"world"可由"w", "wo", "wor", 和 "worl"添加一个字母组成。
```

**示例 2:**

```
输入:
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出: "apple"
解释:
"apply"和"apple"都能由词典中的单词组成。但是"apple"得字典序小于"apply"。
```

**注意:**

- 所有输入的字符串都只包含小写字母。
- `words`数组长度范围为`[1,1000]`。
- `words[i]`的长度范围为`[1,30]`。



## 解题思路

思路一：

```js
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort();
  const set = new Set();
  let res = '';
  words.forEach(word => {
    if (word.length === 1 || set.has(word.slice(0, word.length - 1))) {
      res = word.length > res.length ? word : res;
      set.add(word);
    }
  });
  return res;
};
```





## 相关推荐

我为你挑选的[哈希表](/art/hash.html)题目：
