# 0073 矩阵置零



## 题目导航

难度：[中等](/solution/medium/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/set-matrix-zeroes/)  [力扣](https://leetcode-cn.com/problems/set-matrix-zeroes/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0073-set-matrix-zeroes.js)





## 题目描述

给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

```
输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```


示例 2:

```
输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```



进阶:

- 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
- 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
- 你能想出一个常数空间的解决方案吗？



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/set-matrix-zeroes

:::



## 解题思路

思路一：

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[n - 1 - j][i]
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
      matrix[j][n - 1 - i] = tmp
    }
  }
};
```



## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
