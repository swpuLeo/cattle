# 661 图片平滑器


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/image-smoother/)  [力扣](https://leetcode-cn.com/problems/image-smoother/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0661-image-smoother.js)






## 题目描述

包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。


示例 1:

```
输入:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
输出:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
```


注意：

- 给定矩阵中的整数范围为 [0, 255]。
- 矩阵的长和宽的范围均为 [1, 150]。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/image-smoother/
:::



## 解题思路


思路一

```js
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  const res = [];
  const row = M.length;
  const col = M[0].length;
  for (let i = 0; i < row; i++) {
    res.push([]);
    for (let j = 0; j < col; j++) {
      let sum = M[i][j];
      let count = 1;
      if (i - 1 >= 0) {
        sum += M[i - 1][j];
        count += 1;
        if (j - 1 >= 0) {
          sum += M[i - 1][j - 1];
          count += 1;
        }
        if (j + 1 < col) {
          sum += M[i - 1][j + 1];
          count += 1;
        }
      }
      if (i + 1 < row) {
        sum += M[i + 1][j];
        count += 1;
        if (j - 1 >= 0) {
          sum += M[i + 1][j - 1];
          count += 1;
        }
        if (j + 1 < col) {
          sum += M[i + 1][j + 1];
          count += 1;
        }
      }
      if (j - 1 >= 0) {
        sum += M[i][j - 1];
        count += 1;
      }
      if (j + 1 < col) {
        sum += M[i][j + 1];
        count += 1;
      }
      let average = Math.floor(sum / count);
      res[i].push(average);
    }
  }
  return res;
};
```


思路二

```js
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  // 将二维矩阵降维
  const arr = M.reduce((prev, next) => [...prev, ...next], []);
  const res = []; // 结果矩阵，二维
  const tmp = []; // 灰度数组，一维
  const r = M.length;
  const c = M[0].length;
  for (let i = 0; i < arr.length; i++) {
    const row = Math.floor(i / c);
    const col = i % c;
    let sum = M[row][col];
    let count = 1;
    if (row - 1 >= 0) {
      sum += M[row - 1][col];
      count += 1;
      if (col - 1 >= 0) {
        sum += M[row - 1][col - 1];
        count += 1;
      }
      if (col + 1 < c) {
        sum += M[row - 1][col + 1];
        count += 1;
      }
    }
    if (row + 1 < r) {
      sum += M[row + 1][col];
      count += 1;
      if (col - 1 >= 0) {
        sum += M[row + 1][col - 1];
        count += 1;
      }
      if (col + 1 < c) {
        sum += M[row + 1][col + 1];
        count += 1;
      }
    }
    if (col - 1 >= 0) {
      sum += M[row][col - 1];
      count += 1;
    }
    if (col + 1 < c) {
      sum += M[row][col + 1];
      count += 1;
    }
    const average = Math.floor(sum / count);
    tmp.push(average);
  }
  // 将一维数组转为二维
  for (let i = 0; i < Math.floor(tmp.length / c); i++) {
    res.push(tmp.slice(i * c, (i + 1) * c));
  }
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
