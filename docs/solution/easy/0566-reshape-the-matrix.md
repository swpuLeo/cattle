# 0566 重塑矩形


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/reshape-the-matrix/)  [力扣](https://leetcode-cn.com/problems/reshape-the-matrix/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0566-reshape-the-matrix.js)






## 题目描述

在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。

给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。

如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。


示例 1:

```
输入:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
输出:
[[1,2,3,4]]
解释:
行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 用之前的元素值一行一行填充新矩阵。
```


示例 2:

```
输入:
nums =
[[1,2],
 [3,4]]
r = 2, c = 4
输出:
[[1,2],
 [3,4]]
解释:
没有办法将 2 * 2 矩阵转化为 2 * 4 矩阵。 所以输出原矩阵。
```


注意：

- 给定矩阵的宽和高范围在 [1, 100]。
- 给定的 r 和 c 都是正数。



::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/reshape-the-matrix/
:::



## 解题思路


思路一

```js
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const oarr = nums.join(',').split(',');
  const len = oarr.length;
  if (len !== r * c) return nums;
  const arr = [];
  for (let i = 0; i < len; i++) {
    const or = i / c | 0;
    arr[or] = arr[or] || [];
    arr[or][i % c] = oarr[i];
  }
  return arr;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
