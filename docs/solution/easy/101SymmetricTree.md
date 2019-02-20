# 101 对称二叉树

::: tip 关于题目

难度：

分类：

来源：

源码：

:::



## 题目描述

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 `[1,2,2,3,4,4,3]` 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 `[1,2,2,null,3,null,3]` 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```



## 解题思路





:bulb: **JS 版本**

```js
const isSymmetric = root => {
  const isMirror = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return (p.val === q.val)
      && isMirror(p.right, q.left)
      && isMirror(p.left, q.right);
  };
  return isMirror(root, root);
};
```



:bulb: **C++ 版本**

```cpp
class Solution {
public:
  bool isSymmetric(TreeNode* root) {
    return isMirror(root, root);
  }
  bool isMirror(TreeNode* p, TreeNode* q) {
    if (!p && !q)
      return true;
    if (!p || !q)
      return false;
    if (p->val == q->val)
      return isMirror(p->left, q->right) && isMirror(p->right, q->left);
    return false;
  }
};
```



:bulb: **Python3 版本**

```python
class Solution:
  def isSymmetric(self, root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    if root:
      return self.isMirror(root.left, root.right)
    return True
  def isMirror(self, p, q):
    if p and q:
      return p.val == q.val and self.isMirror(p.left, q.right) and self.isMirror(p.right, q.left)
    else:
      return not p and not q
```

