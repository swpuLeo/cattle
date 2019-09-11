# 0392 判断子序列



## 题目导航

难度：[简单](/solution/easy/)

分类：[贪心算法](/art/greedy.html) | [二分查找](/art/binary-serach.html) | [动态规划](/art/dynamic-programming.html)

来源：[LeetCode](https://leetcode.com/problems/is-subsequence/)  [力扣](https://leetcode-cn.com/problems/is-subsequence/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0392-is-subsequence.js)






## 题目描述

给定字符串 s 和 t ，判断 s 是否为 t 的子序列。你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。


示例 1:

```
s = "abc", t = "ahbgdc"

返回 true.
```

示例 2:

```
s = "axc", t = "ahbgdc"

返回 false.
```






::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/is-subsequence/
:::



## 解题思路

思路一

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s.length) return true
  let i = 0, j = 0
  for (; j < t.length; j++) {
    if (s[i] === t [j]) i += 1
    if (i === s.length) return true
  }
  return false
};
```





## 相关推荐

我为你挑选的[贪心算法](/art/greedy.html)题目：
