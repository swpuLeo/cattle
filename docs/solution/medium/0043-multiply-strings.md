# 0043 电话号码的数字组合



## 题目导航

难度：[中等](/solution/medium/)

分类：[字符串](/art/string.html) | [数学](/art/math.html)

来源：[LeetCode](https://leetcode.com/problems/multiply-strings/)  [力扣](https://leetcode-cn.com/problems/multiply-strings/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0043-multiply-strings.js)





## 题目描述

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。


说明：

- num1 和 num2 的长度小于110。
- num1 和 num2 只包含数字 0-9。
- num1 和 num2 均不以零开头，除非是数字 0 本身。
- 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。



示例 1:

```
输入: num1 = "2", num2 = "3"
输出: "6"
```


示例 2:

```
输入: num1 = "123", num2 = "456"
输出: "56088"
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/multiply-strings
:::



## 解题思路

思路一：

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const res = []
  for (let i = num1.length - 1; i >= 0; i--) {
    const cur = +num1[i]
    let carry = 0
    let ret = ''
    for (let j = num2.length - 1; j >= 0; j--) {
      const multiply = cur * +num2[j] + carry
      carry = Math.floor(multiply / 10)
      ret = multiply % 10 + ret
    }
    res.push(carry ? carry + ret : ret)
  }
  return res.reduce((prev, next, index) => {
    // 末尾补零
    next += ''.padEnd(index, 0)
    // 保证 next 是较长的字符串
    if (next.length < prev.length) [prev, next] = [next, prev]
    let carry = 0
    let ret = ''
    const diff = next.length - prev.length
    // 遍历长度较长的字符串，注意进位
    for (let i = next.length - 1; i >= 0; i--) {
      // 较短的字符串做处理
      const sum = (+prev[i - diff] || 0) + +next[i] + carry
      carry = Math.floor(sum / 10)
      ret = sum % 10 + ret
    }
    return carry ? carry + ret : ret
  })
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
