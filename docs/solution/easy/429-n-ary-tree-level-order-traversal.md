---
sidebar: auto
---

# 429 N 叉树的层序遍历

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[树](/art/tree.html)

来源：[LeetCode](https://leetcode.com/problems/n-ary-tree-level-order-traversal/)  [力扣](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/NAryTreeLevelOrderTraversal.js)

:::



## 题目描述

给定一个 N 叉树，返回其结点值的层序遍历。

例如给定一棵 3 叉树：

![429-illustration](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/429-illustration.png)

返回其层序遍历：

```
[
  [1],
  [3,2,4],
  [5,6]
]
```



## 解题思路

树的层序遍历需要借助一个队列来保存结点。而本题则需要判断每一层是否结束，这里利用一个变量提前保存每一层的结点数量。

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 * this.val = val;
 * this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length) {
    const row = [];
    let count = queue.length;
    while (count) {
      const node = queue.shift();
      for (let child of node.children) {
        queue.push(child);
      }
      row.push(node.val);
      count -= 1;
    }
    res.push(row);
  }
  return res;
};
```


## 相关推荐

我为你挑选的[树](/art/tree.html)题目：
