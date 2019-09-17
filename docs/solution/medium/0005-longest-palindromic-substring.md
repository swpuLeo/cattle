# 0005 最长回文字串



## 题目导航

难度：[中等](/solution/medium/)

分类：[字符串](/art/string.html) | [动态规划](/art/dynamic-programming.html)

来源：[LeetCode](https://leetcode.com/problems/longest-palindromic-substring/)  [力扣](https://leetcode-cn.com/problems/longest-palindromic-substring/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0005-longest-palindromic-substring.js)





## 题目描述

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。



示例 1:

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```



示例 2:

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```



示例 3:

```
输入: "cbbd"
输出: "bb"
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/longest-palindromic-substring
:::



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  const dp = Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(s.length).fill(false);
  }
  let maxLen = 1;
  let res = s[0];
  for (let r = 1; r < s.length; r++) {
    for (let l = 0; l < r; l++) {
      if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        const curLen = r - l + 1;
        if (curLen > maxLen) {
          maxLen = curLen;
          res = s.slice(l, r + 1);
        }
      }
    }
  }
  return res;
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
