# 0010 正则表达式匹配



## 题目导航

难度：[中等](/solution/difficult/)

分类：[字符串](/art/string.html) | [回溯算法](/art/back-tracking.html) | [动态规划](/art/dynamic-programming.html)

来源：[LeetCode](https://leetcode.com/problems/regular-expression-matching/)  [力扣](https://leetcode-cn.com/problems/regular-expression-matching/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/difficult/0010-regular-expression-matching.js)





## 题目描述

给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

```
'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
```

所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

说明:

```
s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
```


示例 1:

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```



示例 2:

```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

示例 3:

```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

示例 4:

```
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

示例 5:

```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/regular-expression-matching
:::



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if(!p) return !s
  const first = s && [s[0], '.'].includes(p[0])
  return p.length >= 2 && p[1] === '*'
    // 当前 p 的 * 匹配 0 个 or 匹配 1 个
    ? isMatch(s, p.slice(2)) || first && isMatch(s.slice(1), p)
    : first && isMatch(s.slice(1), p.slice(1))
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
