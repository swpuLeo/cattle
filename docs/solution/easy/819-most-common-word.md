# 819 最常见的单词

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/most-common-word/)  [力扣](https://leetcode-cn.com/problems/most-common-word/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/MostCommonWord.js)

:::



## 题目描述

给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。



**示例：**

```
输入:
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
输出: "ball"
解释:
"hit" 出现了3次，但它是一个禁用的单词。
"ball" 出现了2次 (同时没有其他单词出现2次)，所以它是段落里出现次数最多的，且不在禁用列表中的单词。
注意，所有这些单词在段落里不区分大小写，标点符号需要忽略（即使是紧挨着单词也忽略， 比如 "ball,"），
"hit"不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。
```



**说明：**

- `1 <= 段落长度 <= 1000`.
- `1 <= 禁用单词个数 <= 100`.
- `1 <= 禁用单词长度 <= 10`.
- 答案是唯一的, 且都是小写字母 (即使在 `paragraph` 里是大写的，即使是一些特定的名词，答案都是小写的。)
- `paragraph` 只包含字母、空格和下列标点符号`!?',;.`
- 不存在没有连字符或者带有连字符的单词。
- 单词里只包含字母，不会出现省略号或者其他标点符号。



## 解题思路

思路一：

```js
var mostCommonWord = function(paragraph, banned) {
  const map = new Map();
  // 使用正则表达式匹配出字母
  paragraph
    .toLowerCase()
    .match(/[a-z]+/g)
    .filter(word => !banned.includes(word))
    .forEach(word => map.set(word, (map.get(word) || 0) + 1));
  // 巧妙利用 sort 的排序方式
  // 根据单词出现的次数升序排列
  // ans 的最后一项为 ['word', count]
  const ans = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return ans.pop()[0];
};
```



思路二：

```js
var mostCommonWord = function(paragraph, banned) {
  const map = new Map();
  // 使用正则替换掉特殊字符
  // 然后根据空格分割
  // 注意这里可能会出现 `多个连续空格的情况`
  // 分割结果会产生空字符串
  // 所以在 filter 中过滤时，比上一种实现，增加了真值判断
  paragraph
    .toLowerCase()
    .replace(/[!?',;.]/g, ' ')
    .split(' ')
    .filter(word => word && !banned.includes(word))
    .forEach(word => map.set(word, (map.get(word) || 0) + 1));
  const ans = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return ans.pop()[0];
};
```



思路三：

```js
var mostCommonWord = function(paragraph, banned) {
  const map = new Map();
  paragraph
    .toLowerCase()
    .replace(/[!?',;.]/g, ' ')
    .split(' ')
    .filter(word => word && !banned.includes(word))
    .forEach(word => map.set(word, (map.get(word) || 0) + 1));
  // 这个思路是利用循环找出出现最大次数的单词
  let max = 0;
  let ans = ''
  for (const key of map) {
    if (key[1] > max) {
      max = key[1];
      ans = key[0];
    }
  }
  return ans;
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
