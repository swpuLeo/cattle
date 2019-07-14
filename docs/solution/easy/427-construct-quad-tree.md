# 427 建立四叉树

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[树](/art/tree.html)

来源：[LeetCode](https://leetcode.com/problems/construct-quad-tree/)  [力扣](https://leetcode-cn.com/problems/construct-quad-tree/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ConstructQuadTree.js)

:::



## 题目描述

我们想要是用一棵四叉树来存储一个 N*N （N <1000，且确保是 2 的整次幂）的布尔值网格。网格中的每一个值只能是真或假。书的根结点代表整个网络。对于每个结点，它将被等分成四个孩子结点直到这个区域内的值都是相等的。

每个结点还有另外两个布尔值变量：isLeaf 和 val。isLeaf 当这个结点是一个叶子结点时为真。val 变量储存叶子结点所代表的区域的值。

你的任务是使用一个四叉树表示给定的网络。

给定下面这个 8 * 8 的网络，我们将建立一个这样的四叉树：

![427-illustration-1](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/427-illustration-1.png)

由上文的定义，它将被这样分割：

![427-illustration-2](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/427-illustration-2.png)

对应的四叉树应该像下面这样，每个结点由一对 (isLeaf, val) 所代表。对于非叶子节点，val 的值可以是任意的，所以用 * 代替。

![427-illustration-3](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/427-illustration-3.png)




## 解题思路

根据题目描述，这个题的意思是在划分一个 N*N 的网络，（N 一定是 2 的整数次幂）。如果在一个网络中，所有的格子的值都是相同的，那么这个网络就是一个叶子结点，否则，这个网络就要被四等分为 topleft、topright、bottomleft、bottomright，每一次等分后的网络边长是原网络的 1/2。利用递归就可以解决本题。

```js
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 * this.val = val;
 * this.isLeaf = isLeaf;
 * this.topLeft = topLeft;
 * this.topRight = topRight;
 * this.bottomLeft = bottomLeft;
 * this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */

var construct = function(grid) {
  const quadTree = (grid, x, y, offset) => {
    if (offset < 1) return null;
    for (let i = x; i < x + offset; i++) {
      for (let j = y; j < y + offset; j++) {
        if (grid[i][j] !== grid[x][y]) { // non leaf node
          offset = offset / 2;
          return new Node(grid[i][j], false,
                         quadTree(grid, x, y, offset),
                         quadTree(grid, x, y + offset, offset),
                         quadTree(grid, x + offset, y, offset),
                         quadTree(grid, x + offset, y + offset, offset));
        }
      }
    }
    // leaf node
    return new Node(grid[x][y], true, null, null, null, null);
  }
  return quadTree(grid, 0, 0, grid.length);
};
```


## 相关推荐

我为你挑选的[树](/art/tree.html)题目：
