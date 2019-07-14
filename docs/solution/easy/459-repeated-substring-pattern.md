# 459 重复的子字符串

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/repeated-substring-pattern/)  [力扣](https://leetcode-cn.com/problems/repeated-substring-pattern/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/RepeatedSubstringPattern.js)

:::



## 题目描述

给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过 10000。

示例如下：

```
输入: "abab"
输出: True
解释: 可由子字符串 "ab" 重复两次构成。


输入: "aba"
输出: False


输入: "abcabcabcabc"
输出: True
解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
```



## 解题思路

这个题我们对字符串进行迭代，i 代表此时可以从 0 处截取 i 个字符作为子串 sub，那么此时字符串可以被划分为 k = s.length / i 段，然后用 sub 依次与 k 段进行比较。如果相等，那么该字符串则可以被 sub 重复表示；否则，i 自增 1，重复上面的操作。

```js
var repeatedSubstringPattern = function(s) {
  for (let i = 2; i <= s.length; i++) {
    if (s.length % i === 0) {
      const len = s.length / i;
      const sub = s.substr(0, len);
      let diff = false;
      for (let j = 1; j < i; j++) {
        const cur = s.substr(j * len, len);
        if (cur !== sub) {
          diff = true;
          break;
        }
      }
      if (!diff) return true;
    }
  }
  return false;
};
```



利用 JS 字符串的 repeat() 方法，可以将上述步骤简化。

```js
var repeatedSubstringPattern = function(s) {
  if (s.length <= 1) return false;
  for (const [index, item] of [...s].entries()) {
    if (index >= s.length / 2) break;
    const sub = s.slice(0, index + 1);
    const times = s.length / sub.length;
    if (sub.repeat(times) === s) return true;
  }
  return false;
};
```



最后，就是大招了，看到一个很精彩的解法。对于一个可以被子串重复构成的字符串，比如 abcabc 模式，它可以被 abc 重复构成。这里将 abcabc 与其自身相加得到 abcabcabcabc，然后去除首尾字符得到 bc**abcabc**ab。对于它的前半部分 bcabc 中 bc 是不完整的，但如果字符串可以被重复，那么一定能在后半部分 abcab 中找到 abc 这个完整的。

```js
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, -1).includes(s);
};
```



## 相关推荐

我为你挑选的关于[字符串](/art/string.html)的题目：

- [100]()
- [111]()
