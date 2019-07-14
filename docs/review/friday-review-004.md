# 第 4 周 - 树


![Friday Review 002](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/review/fr-003.jpg)


Hello，我是 Leo。

每周五，我将对本周的 [LeetCode 计划](/plan/monday-plan-003.html) 进行复盘。



## 总结

本周话题是 [树](/art/tree.html) ，一共 7 个题目。这篇文章来聊聊二叉搜索树。



### 数组简述

数组是一种线性表数据结构，用一组连续的内存空间，来存储一组具有相同类型的数据。计算机会给每个内存单元分配一个地址，计算机通过地址来访问内存中的数据。当计算机需要随机访问数组中的某个元素时，就会通过一个寻址公式进行计算：

```
a[i]_address = base_address + i * data_type_size
```

`data_type_size` 在这里是数组中每个元素的大小。

因此，随机访问数组中的某个元素时，时间复杂度为 O(1)。

这里有一个误解：数组查询的时间复杂度为 O(1)。这是错的。当在数组中找到某个具体的值时，也得从头开始遍历，因此时间复杂度为 O(n)。



### JS 中的数组

在 JavaScript 中，数组是非常常用的一个内置数据类型。

先说说 JavaScript 中的数组与 C 中的数组有哪些区别：

1. JavaScript 中数组的长度是动态的；
2. JavaScript 中的数组不会限制同一数组中的元素必须为同一类型；
3. JavaScript 中数组可以允许存在索引不连续的项。

在 JavaScript 中，可以将数组作为一个栈或者队列，只需要调用 `push()`、`pop()` 就可以模拟一个栈，而调用 `push()`、`shift()` 就可以模拟一个队列。

在刷题的过程中，经常会遇到使用的数组方法：

1、数组求和

```js
const sum = arr.reduce((prev, next) => prev + next, 0);
```

详见 1013 将数组分成和相等的三个部分

2、生成长度为 n 的数组，并且数组每项都初始化为 0

```js
const array = Array(60).fill(0)
```

使用了 ES6 新增的 `fill()` 方法，直接使用 Array，生成的数组所有项为 `undefined`。

详见 1010 总持续时间可被 60 整除的歌曲

3、数组的排序

JavaScript 中提供了 `sort()` 方法进行排序，其内部实现在大于 10 个数据项时采用的快排，小于 10 个采用的插入排序。但是 `sort()` 存在一个问题是，默认转换为 ASCII 码进行排序，即整数 12 会小于 2。

所以，对于数字类型来说，正确使用 `sort()` 的方式是：

```js
arr.sort((a, b) => a - b); // 升序
arr.sort((a, b) => b - a); // 降序
```





## 题目解析

点击下方每个题目，可直接跳转至题目解析：

[589 N 叉树的前序遍历](/solution/easy/589-n-ary-tree-preorder-traversal.html)

[590 N 叉树的后序遍历](/solution/easy/590-n-ary-tree-postorder-traversal.html)

[700 二叉搜索树中的搜索](/solution/easy/700-search-in-binary-tree.html)

[783 二叉搜索树结点最小距离](/solution/easy/783-minimum-distance-between-bst-nodes.html)

[872 叶子相似的树](/solution/easy/872-leaf-similar-tree.html)

[897 递增顺序查找树](/solution/easy/897-increasing-order-search-tree.html)

[938 二叉搜索树的范围和](/solution/easy/938-range-sum-of-bst.html)
