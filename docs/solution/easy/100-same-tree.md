# 100 相同的树

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[树](/art/tree.html)

来源：[LeetCode](https://leetcode.com/problems/two-sum/)   [力扣](https://leetcode-cn.com/problems/two-sum/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/TwoSum.js)    [C++ 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/TwoSum.cpp)    [Python 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/TwoSum.py)

:::



## 题目描述

给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例如下：


    输入:       1         1
              / \       / \
             2   3     2   3

            [1,2,3],   [1,2,3]

    输出: true

```
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```

```
输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
```





## 解题思路

### ⭐️ 递归

本题可以使用哈希表巧妙地将时间复杂度降低为 O(n)。

:bulb: **JS 版本**

```js
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return false;
};
```

💡 **C++ 版本**

```cpp
class Solution {
public:
  bool isSameTree(TreeNode* p, TreeNode* q) {
    if (!p && !q)
      return true;
    if (!p || !q)
      return false;
    if (p->val == q->val)
      return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    return false;
  }
};
```

:bulb: **Python3 版本**

```python
class Solution:
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        if not p and not q:
          return True
        if not p or not q:
          return False
        if p.val == q.val:
          return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        return False
```



## 相关推荐

我为你挑选的关于**树**的题目，有空不妨尝试一下：

- [100]()
- [111]()

:bulb: 你可以查看[数据结构 - 树](/art/tree.html)的相关知识的归纳总结，希望对你有帮助。
