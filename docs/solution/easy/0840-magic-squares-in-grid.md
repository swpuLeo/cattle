# 0840 矩阵中的幻方


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/magic-squares-in-grid/)  [力扣](https://leetcode-cn.com/problems/magic-squares-in-grid/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0840-magic-squares-in-grid.js)






## 题目描述

在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。

至少有一个空座位，且至少有一人坐在座位上。

亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

返回他到离他最近的人的最大距离。


示例 1:

```
输入：[1,0,0,0,1,0,1]
输出：2
解释：
如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
因此，他到离他最近的人的最大距离是 2 。
```

示例 2：

```
输入：[1,0,0,0]
输出：3
解释：
如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
这是可能的最大距离，所以答案是 3 。
```


注意:
- 1 <= seats.length <= 20000
- seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/magic-squares-in-grid/
:::



## 解题思路


思路一

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let count = 0;
  for (let i = 2; i < row; i++) {
    for (let j = 2; j < col; j++) {
      if (grid[i - 1][j - 1] !== 5) continue;
      if ((grid[i - 2][j - 2] + grid[i - 2][j - 1] + grid[i - 2][j] !== 15)
          || (grid[i - 1][j - 2] + grid[i - 1][j] != 10)
          || (grid[i][j - 2] + grid[i][j - 1] + grid[i][j] !== 15)
          || (grid[i - 2][j - 2] + grid[i - 1][j - 2] + grid[i][j - 2] !== 15)
          || (grid[i-2][j-2] + grid[i-1][j-2] + grid[i][j-2] !== 15)
          || (grid[i-2][j-1] + grid[i][j-1] !== 10)
          || (grid[i-2][j] + grid[i-1][j] + grid[i][j] !== 15)
          || (grid[i-2][j-2] + grid[i][j] !== 10)
          || (grid[i-2][j] + grid[i][j-2] !== 10)
         ) continue;
      if (grid[i-2][j-2] < 1 || grid[i-2][j-1] < 1 || grid[i-2][j] < 1
          || grid[i-1][j-2] < 1 || grid[i-1][j] < 1
          || grid[i][j-2] < 1 || grid[i][j-1] < 1 || grid[i][j] < 1) continue;
      if (grid[i-2][j-2] === 5) continue;
      count += 1;
    }
  }
  return count;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
