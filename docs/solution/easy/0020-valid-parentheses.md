# 0020 有效的括号


## 题目导航

难度：[简单](/solution/easy/)

分类：[栈](/art/stack.html) | [字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/valid-parentheses/)  [力扣](https://leetcode-cn.com/problems/valid-parentheses/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0020-valid-parentheses.js)






## 题目描述

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

注意：空字符串可被认为是有效字符串。


示例 1:

```
输入: "()"
输出: true
```

示例 2:

```
输入: "()[]{}"
输出: true
```

示例 3:

```
输入: "(]"
输出: false
```

示例 4:

```
输入: "([)]"
输出: false
```

示例 5:

```
输入: "{[]}"
输出: true
```


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/valid-parentheses
:::



## 解题思路


思路一

```js
/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  const tmp = []
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === '(' || cur === '[' || cur === '{') {
      tmp.push(cur)
    } else {
      if (!tmp.length) return false

      const top = tmp[tmp.length - 1]
      if (cur === ')' && top !== '(') return false
      if (cur === ']' && top !== '[') return false
      if (cur === '}' && top !== '{') return false

      tmp.pop()
    }
  }
  return tmp.length === 0
 };
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
