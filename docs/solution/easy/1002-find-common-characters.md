# 1002 查找常用字符

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/find-common-characters/)  [力扣](https://leetcode-cn.com/problems/find-common-characters/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/FindCommonCharacters.js)

:::



## 题目描述

给定仅有小写字母组成的字符串数组 `A`，返回列表中的每个字符串中都显示的全部字符（**包括重复字符**）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。



**示例 1：**

```
输入：["bella","label","roller"]
输出：["e","l","l"]
```

**示例 2：**

```
输入：["cool","lock","cook"]
输出：["c","o"]
```



**提示：**

1. `1 <= A.length <= 100`
2. `1 <= A[i].length <= 100`
3. `A[i][j]` 是小写字母



## 解题思路

思路一：

```js
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const list = [];
  const res = Array(26).fill(0);
  for (let c of A[0]) {
    res[c.charCodeAt() - 97] += 1;
  }
  for (let i = 1; i < A.length; i++) {
    const tmp = Array(26).fill(0)
    for (let c of A[i]) {
      tmp[c.charCodeAt() - 97] += 1;
    }
    for (let j = 0; j < 26; j++) {
      res[j] = Math.min(res[j], tmp[j]);
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] > 0) {
      for (let j = 0; j < res[i]; j++) {
        list.push(String.fromCharCode(97 + i));
      }
    }
  }
  return list;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
