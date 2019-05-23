---
sidebar: auto
---

# 501 二叉搜索树中的众数

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[树](/art/tree.html)

来源：[LeetCode](https://leetcode.com/problems/find-mode-in-binary-search-tree/)  [力扣](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/FindModeInBinarySearchTree.js)

:::



## 题目描述

给定一个有相同值的二叉搜索树，找出树中的所有众数。

示例：给定 [1, null, 2, 2]，返回 [2]。

```
  1
   \
    2
   /
  2
```

注意：如果众数超过 1 位，不需考虑顺序。


## 解题思路

拿到这个题，我的思路首先是借助一个哈希表。通过前面的刷题经验，往往题目中出现计数的问题，通常会使用哈希表来辅助计数。所以思路就是对这颗树进行遍历，统计树中数字出现的次数保存在哈希表中，然后从哈希表中比较得到众数。代码如下：

```js
var findMode = function(root) {
  if (!root) return [];
  const map = {};
  // 递归统计数字出现的次数
  const traverse = root => {
    if (root) {
      if (!map[root.val]) {
        map[root.val] = 1;
      } else {
        map[root.val] += 1;
      }
    }
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  }
  traverse(root);
  let max = -Infinity;
  const res = [];
  // 找出出现最多的次数
  for (let key in map) {
    max = max > map[key] ? max : map[key];
  }
  // 根据最多的次数，找出众数
  for (let key in map) {
    if (map[key] === max) res.push(key);
  }
  return res;
};
```

再进一步思考，能不能使用常数空间来解决这个问题（即不用哈希表）？也根据刷题经验，我们可以利用一个变量来保存当前的数字出现的次数。我们来想，如果给定一个有序的数组，比如 [1, 2, 2, 3, 3, 4]，我们就可以利用变量来记录当前数字出现的次数，以及当前最大出现次数，就能找到这个有序数组中的众数 2 和 3。但是在树中怎么解决呢？

这还得清楚二叉搜索树的一大特性：中序遍历二叉搜索树能够得到一个有序数组。熟悉这一特性，使用常数空间的进阶解题思路也就得到了。详见代码。

```js
var findMode = function(root) {
  let res = [];
  let cur;
  let count = 0;
  let max = -Infinity;
  // 中序遍历
  const traverse = root => {
    if (!root) return;
    // 左孩子
    traverse(root.left);
    // 根节点
    if (cur === undefined){
      cur = root.val;
      count = 1;
    } else {
      if (cur === root.val) {
        count += 1;
      } else {
        if (count > max) {
          max = count;
          res = [cur];
        } else if (count === max) {
          res.push(cur);
        }
        cur = root.val;
        count = 1;
      }
    }
    // 右孩子
    traverse(root.right);
  };
  traverse(root);
  if (cur !== undefined) {
    if (count > max) {
      max = count;
      res = [cur];
    } else if (count === max) {
      res.push(cur);
    }
  }
  return res;
};
```

## 相关推荐

我为你挑选的[树](/art/tree.html)题目：
