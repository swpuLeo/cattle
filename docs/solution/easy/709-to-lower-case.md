# 709 转换成小写字母

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/to-lower-case/)  [力扣](https://leetcode-cn.com/problems/to-lower-case/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ToLowerCase.js)

:::



## 题目描述

实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。



**示例 1：**

```
输入: "Hello"
输出: "hello"
```

**示例 2：**

```
输入: "here"
输出: "here"
```

**示例** **3：**

```
输入: "LOVELY"
输出: "lovely"
```





## 解题思路

思路一：

```js
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(code + 32);
    } else {
      res += str[i];
    }
  }
  return res;
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
