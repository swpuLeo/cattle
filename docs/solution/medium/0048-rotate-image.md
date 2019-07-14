# 0048 旋转图像



## 题目导航

难度：[中等](/solution/medium/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/rotate-image/)  [力扣](https://leetcode-cn.com/problems/rotate-image/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0048-rotate-image.js)





## 题目描述

给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

```
给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

```



示例 2:

```
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/rotate-image

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
