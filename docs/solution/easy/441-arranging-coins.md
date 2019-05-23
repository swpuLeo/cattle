---
sidebar: auto
---

# 441 排列硬币

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[数学](/art/math.html)、[二分查找](/art/binary-search.html)

来源：[LeetCode](https://leetcode.com/problems/arranging-coins/)  [力扣](https://leetcode-cn.com/problems/arranging-coins/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ArrangingCoins.js)

:::



## 题目描述

你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就恰好有 k 枚硬币。给定一个数字 n，找出可形成完整阶梯行的总行数。

n 是一个非负整数，并且在 32 位有符号整型范围内。

示例如下：

```
示例 1

n = 5

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤

因为第三行不完整，所以返回2.


示例 2

n = 8

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

因为第四行不完整，所以返回3.
```



## 解题思路

最简单的思路，第 1 行有 1 个硬币，第 2 行有 2 个硬币 ... 把每一行的硬币数量相加，直到最后一行不足当前行应该有的硬币数，那么返回前一行的硬币数。

```js
var arrangeCoins = function(n) {
  let row = 0;
  while (n > row) {
    row += 1;
    n -= row;
  }
  return row;
};
```



上面的思路的时间复杂度为 O(n)。根据提示，本题还可以使用二分查找。如何二分？我们得找中点和 n 的关系。再来看一下硬币的排列：1, 2, 3, 4, ..., k, m(m <= k + 1)，一共 n 个硬币。你会发现这是一个近似的等差数列，并且 n 是等差数列的和。那么这个关系就应该是（假设中点为 mid）：mid * (mid + 1) / 2 与 n 进行比较。

```js
var arrangeCoins = function(n) {
  let low = 0;
  let high = n;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (0.5 * mid * mid + 0.5 * mid <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low - 1;
};
```

终极解法。既然上面我们已经得出这是一个近似的等差数列，那么可以直接用等差数列求和公式进行逆向运算。

n = k * (k + 1) / 2，已知 n，求 k。

那么 k = (2 * n + 1/4 ) - 1/2。

```js
var arrangeCoins = function(n) {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};
```



## 相关推荐

暂无相关推荐
