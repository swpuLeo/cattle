# 463 岛屿的周长

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[待分类](/art/to-be-classified.html)

来源：[LeetCode](https://leetcode.com/problems/island-perimeter/)  [力扣](https://leetcode-cn.com/problems/island-perimeter/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/IslandPerimeter.js)

:::



## 题目描述

给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地，0 表示水域。网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。岛屿中没有湖（湖是指水域在岛屿内部且不与岛屿周围的水域相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100。计算这个岛屿的周长。

示例如下：

```
输入:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

输出: 16

解释: 它的周长是下面图片中的 16 个黄色的边：
```

![463-illustration](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/463-illustration.png)



## 解题思路

这个题我的思路是遍历每一个格子，然后判断格子有几条边可以被计算。首先跳过值为 0 的格子，对于值为 1 的格子，做以下判断：如果它的上下左右都存在格子，那么只需判断周围的格子是否是 0，如果是 0，周长就加 1。而对于边界值，比如图中的第二个格子，上方没有格子，周长直接加 1。

```js
var islandPerimeter = function(grid) {
  let c = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        if (i - 1 < 0 || grid[i - 1][j] === 0) c += 1;
        if (i + 1 >= grid.length || grid[i + 1][j] === 0) c += 1;
        if (j - 1 < 0 || grid[i][j - 1] === 0) c += 1;
        if (j + 1 >= grid[0].length ||grid[i][j + 1] === 0) c += 1;
      }
    }
  }
  return c;
};
```



下面还有一种思路，首先默认计算每个陆地格子 4 条边，然后分别判断它的上方和左方是否是陆地，如果是，各减去 2。

```js
var islandPerimeter = function(grid) {
  let c = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        c += 4;
        c -= i > 0 && grid[i - 1][j] ? 2 : 0;
        c -= j > 0 && grid[i][j - 1] ? 2 : 0;
      }
    }
  }
  return c;
};
```



## 相关推荐

暂无相关推荐
