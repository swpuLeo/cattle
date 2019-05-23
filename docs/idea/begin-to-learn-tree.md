---
sidebar: true
---

# 树

非线性结构

问题：

- 二叉树有哪几种存储方式？
- 什么样的二叉树适合用数组来存储？

树的定义，通过图的形式来找树的特征，引出，树、节点、父子关系、父节点、子节点、兄弟节点、根节点、叶子节点

定义高度、深度和层的概念

## 二叉树

也是通过图来直观感受：二叉树、满二叉树、完全二叉树

对于完全二叉树而言，为什么偏偏把最后一层的叶子节点靠左排列的叫做完全二叉树？如果靠右就不能叫做完全二叉树了吗？这个定义的由来或者说目的在哪里？

引出 如何表示或存储一棵二叉树？

- 基于指针或者引用的二叉链式存储法
- 基于数组的顺序存储法

在基于数组的顺序存储法中，下标为 i 位置的左孩子位于 2i 处，右孩子位于 2i + 1 处。完全二叉树是最节省内存的。

发散：堆其实就是一种完全二叉树

### 二叉树的遍历

前序

```js
const preOrder = root => {
  if (!root) return;
  // do something with root
  console.log(root);
  preOrder(root.left);
  preOrder(root.right);
}
```



中序

```js
const inOrder = root => {
  if (!root) return;
  inOrder(root.left);
  // do something with root
  console.log(root);
  inOder(root.right);
}
```



后序

```js
const postOrder = root => {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  // do something with root
  console.log(root);
}
```



二叉树遍历的时间复杂度 O(n)，每个结点最多被访问两次。



## 内容小结

【】

## 拓展思考

- 给定一组数据，比如 1,3,5,6,9,10，可以构建多少种二叉树？

  - 由于二叉树可被存储为数组，那么可以这样理解：n 的数的排列组合，组合数为 n!
  - 卡特兰数

- 二叉树层序遍历的实现？

  - ```js
    const levelOrder = root => {
      if (!root) return;
      const queue = [root];
      while (queue.length) {
        const node = queue.pop();
        // do something with node
        console.log(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    ```

