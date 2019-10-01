# 0003 无重复字符的最长子串


## 题目导航

难度：[中等](/solution/medium/)

分类：[哈希表](/art/hash.html) | 双指针 | [字符串](/art/string.html) | 滑动窗口

来源：[LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)  [力扣](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0003-longest-substring-without-repeating-characters.js)



## 题目描述

给定一个字符串，请你找出其中不含有重复字符的**最长子串**的长度。

示例 1:

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```


示例 2:

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```


示例 3:

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是子串的长度，"pwke" 是一个子序列，不是子串。
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
:::


## 解题思路


:cow: **思路一 暴力求解**

暴力求解的思路是找出所有的子串，然后判断它们是否含有重复字符，并记录最大长度。

```js
// 找出所有子串
let max = 0
for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j <= s.length; j++) {
    const substr = s.slice(i, j)
    if (isUnique(substr)) max = Math.max(max, substr.length)
  }
}
// 判断是否字串是否有重复字符
const isUnique = str => {
  const set = new Set()
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) return false
    set.add(str[i])
  }
  return true
}
```

采用这种思路，会超出时间限制。因为本题采用暴力求解将具有 `O(n^3)` 的时间复杂度，空间复杂度取决于字符串 `n` 的大小以及字母集 `m` （比如只包含英文小写字母，`m = 26`）的大小，为 `O(min(n, m))`。


:cow: **思路二**

暴力求解的缺点在于，我们会重复判断子串是否无重复。比如子串 `abc` 和子串 `abcd`，我们会重复判断 `a`、`ab`、`abc` 等是否重复。更好地解决办法是，当 `abc` 已经判定是无重复子串后，只需判定 `d` 是否存在于 `abc` 中即可判定 `abcd` 是否是无重复子串，即：当 `[i, j - 1]` 之间的子字符串 `substr` 已经判定为无重复，那么只需判定 `s[j]` 是否存在于 `substr` 中。



```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  const len = s.length;
  let maxLen = 0;
  for (let i = 0, j = 0; j < len; j++) {
    if (map.has(s[j])) i = Math.max(map.get(s[j]), i);
    map.set(s[j], j + 1);
    maxLen = Math.max(maxLen, j - i + 1);
  }
  return maxLen;
};
```

<article-divider />


## 相关推荐

<recommend-card />

<about-me />

<copyright />
