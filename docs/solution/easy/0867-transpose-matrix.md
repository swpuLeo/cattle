# 0867 转置矩阵


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/transpose-matrix/)  [力扣](https://leetcode-cn.com/problems/transpose-matrix/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0867-transpose-matrix.js)






## 题目描述

给定一个矩阵 A， 返回 A 的转置矩阵。

矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。


示例 1:

```
输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
```

示例 2：

```
输入：[[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
```


注意:
- 1 <= A.length <= 1000
- 1 <= A[0].length <= 1000


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/transpose-matrix/
:::



## 解题思路


思路一

```js
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const res = [...Array(A[0].length)].map(() => Array(A.length));
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length; j++) {
      res[i][j] = A[j][i];
    }
  }
  return res;
};
```


思路二

```js
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  return A[0].map((item, index) => A.map(sub => sub[index]));
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
