# 538 把二叉搜索树转换为累加树

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[树](/art/tree.html)

来源：[LeetCode](https://leetcode.com/problems/converse-bst-to-greater-tree/)  [力扣](https://leetcode-cn.com/problems/converse-bst-to-greater-tree/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/ConverseBSTToGreaterTree.js)

:::



## 题目描述

给定一棵二叉搜索树，将它转换为累加树，使得每个节点的值是是原来节点的值加上所有大于它的节点值之和。

示例：

```
输入: 二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13
```

注意：如果众数超过 1 位，不需考虑顺序。


## 解题思路

经过昨天的题目 LeetCode | 501 二叉搜索树中的众数，我对二叉搜索树的一个特性：中序遍历二叉搜索树可得到一个有序数组，进行了练习。今天又是一个二叉搜索树的题目，它要将每个结点的值转换为本身的值加上所有大于它的节点值。

我们已经知道可以中序遍历二叉搜索树来获得一个有序数组，并且这个数组是升序的，比如 [1, 2, 3, 4]。我们首先遍历到 1 节点，只能确定它是最小的，但是无法得到比它大的节点的值。

既然升序数组做不到，我们逆向考虑，我们按照右 - 根 - 左的顺序遍历能够得到一个降序数组，比如 [4, 3, 2, 1]。我们首先遍历到 4 节点，能够确定它是最大的，而最大的节点不需要加任何值，依次我们能够得到 3 节点，此时它需要加上 4 ... ... 详见代码。

```js
var convertBST = function(root) {
  let preNum = 0;
  const traverse = root => {
    if (!root) return;
    traverse(root.right);
    root.val += preNum;
    preNum = root.val;
    traverse(root.left);
  }
  traverse(root);
  return root;
};
```


## 相关推荐

我为你挑选的[树](/art/tree.html)题目：
