# 0006 Z 字形变换



## 题目导航

难度：[中等](/solution/medium/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/zigzag-conversion/)  [力扣](https://leetcode-cn.com/problems/zigzag-conversion/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0006-zigzag-conversion.js)





## 题目描述

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

```
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。请你实现这个将字符串进行指定行数变换的函数：

```
string convert(string s, int numRows);
```



示例 1:

```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```



示例 2:

```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/zigzag-conversion
:::



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s
  let row = 0
  let down = false
  let rows = Array(Math.min(s.length, numRows)).fill('')
  for (let char of s) {
    rows[row] += char
    if (row === 0 || row === rows.length - 1) down = !down
    row += down ? 1 : -1
  }
  return rows.join('')
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
