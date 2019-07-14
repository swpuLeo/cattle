# 447 回旋镖的数量

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/number-of-boomerangs/)  [力扣](https://leetcode-cn.com/problems/number-of-boomerangs/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/NumberOfBoomerangs.js)

:::



## 题目描述

给定平面上 n 对不同的点，回旋镖是由点表示的元组 (i, j, k)，其中 i 和 j 之间的距离与 i 和 k 之间的距离相等（需要考虑元组顺序）。找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

示例如下：

```
输入:[[0,0],[1,0],[2,0]]
输出:2
解释:两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
```



## 解题思路

这个题目的思路：对于一个点来说，找到它与平面内其他所有点的距离，并存储在哈希表中，格式为 { 距离值：数量 }。如果某个距离值的数量大于等于 2，那么可构成回旋镖。可构成回旋镖的数量可由排列组合来计算，具体来说是在 n 个点中选 2 个点，考虑顺序，那么组合数 = n * (n - 1)。

其中，点距离计算公式为：((x1 - x2) ^ 2 + (y1 - y2) ^ 2) * (2 ^ 1/2)。


```js
var numberOfBoomerangs = function(points) {
  const getDistance = (a, b) => {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
  }
  const length = points.length;
  let count = 0;
  if (length < 3) return 0;
  for (let i = 0; i < length; i++) {
    const map = new Map();
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        const distance = getDistance(points[i], points[j]);
        map.set(distance, (map.get(distance) || 0) + 1);
      }
    }
    for (const n of map) {
      if (n[1] >= 2) {
        count += (n[1] * (n[1] - 1));
      }
    }
  }
  return count;
};
```



## 相关推荐

我为你挑选的关于[哈希表](/art/hash.html)的题目：

- [100]()
- [111]()
