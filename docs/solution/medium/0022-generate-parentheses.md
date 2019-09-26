# 0022 最长公共前缀


## 题目导航

难度：[中等](/solution/medium/)

分类：[字符串](/art/string.html) | [回溯算法](/art/back-tracking.html)

来源：[LeetCode](https://leetcode.com/problems/generate-parentheses/)  [力扣](https://leetcode-cn.com/problems/generate-parentheses/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/medium/0022-generate-parentheses.js)



## 题目描述

给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

示例：

```
输入：n = 3
输出：
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/generate-parentheses
:::



## 解题思路

思路一：

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n < 1) return []
  const res = []
  const processor = (combination, open, close) => {
    if (combination.length === 2 * n)
      return open === close && res.push(combination)
    if (open <= n) {
      processor(combination + '(', open + 1, close)
    }
    if (close < open) {
      processor(combination + ')', open, close + 1)
    }
  }
  processor('(', 1, 0)
  return res
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
