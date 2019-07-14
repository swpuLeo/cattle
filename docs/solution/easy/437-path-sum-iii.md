# 437 路径总和 III

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[树](/art/tree.html)

来源：[LeetCode](https://leetcode.com/problems/path-sum-iii/)  [力扣](https://leetcode-cn.com/problems/path-sum-iii/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/PathSumIII.js)

:::



## 题目描述

给定一棵二叉树，它的每个结点都存放着一个整数值。找出路径和等于给定数值的路径总和。路径不需要从根结点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父结点到子结点）。

二叉树不超过 10000 个结点，且结点数值范围是 [-1000000, 1000000] 的整数。

示例如下：

```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
```



## 解题思路

按照题目意思，每个结点都有可能作为路径的开始。那么，这个题所的思路就是首先对整棵树进行遍历，确保每个结点都有作为开始路径的可能。然后将每个结点看作根节点，进行深度优先遍历，计算路径和，如果等于目标和，那么计数加一。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 * this.val = val;
 * this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var pathSum = function(root, sum) {
  const dfs = (root, sum) => {
    let res = 0;
    const func = (node, ret) => {
      if (!node) return;
      if (node.val + ret === sum) res += 1;
      func(node.left, node.val + ret);
      func(node.right, node.val + ret);
    }
    func(root, 0);
    return res;
  }
  if (!root) return 0;
  const queue = [root];
  let count = 0;
  while (queue.length) {
    const node = queue.shift();
    count += dfs(node, sum);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return count;
};
```



## 相关推荐

我为你挑选的[树](/art/tree.html)题目：
