# 0844 比较含退格的字符串


## 题目导航

难度：[简单](/solution/easy/)

分类：[栈](/art/stack.html)

来源：[LeetCode](https://leetcode.com/problems/backspace-string-compare/)  [力扣](https://leetcode-cn.com/problems/backspace-string-compare/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0844-backspace-string-compare.js)






## 题目描述

给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。



示例 1：

```
输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
```

示例 2：

```
输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
```

示例 3：

```
输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
```

示例 4：

```
输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
```


提示：

- 1 <= S.length <= 200
- 1 <= T.length <= 200
- S 和 T 只含有小写字母以及字符 '#'。



::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/backspace-string-compare
:::



## 解题思路


思路一

```js
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s = [], t = [];
  for (let i of S) {
    if (i !== '#') s.push(i);
    else if (i === '#' && s.length) s.pop();
  }
  for (let j of T) {
    if (j !== '#') t.push(j);
    else if (j === '#' && t.length) t.pop();
  }
  return s.join('') === t.join('');
};
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
