---
sidebar: auto
---

# 453 最小移动次数使数组元素相等

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[数学](/art/math.html)

来源：[LeetCode](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/)  [力扣](https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/MinimumMovesToEqualArrayElements.js)

:::



## 题目描述

给定一个长度为 n 的非空整数数组，找到让数组元素相等的最小移动次数，每次移动可使 n - 1 个元素增加 1。

示例如下：

```
输入:[1,2,3]
输出:3
解释:只需要3次移动（注意每次移动会增加两个元素的值）：
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```



## 解题思路

题目所说，每次移动 n - 1 个元素，即是对这 n - 1 个元素 +1。我们很容易发现，我们每次移动的元素应该是除去最大值外的其他元素，可使数组各项最快达到相等。按照这个思路，我们需要找到数组最大值、对除最大值外的元素 +1、判断所有元素是否相等，这算作 1 次移动。如果不相等，我们再次循环上述步骤。但是，这样的解法超出了时间限制。

而这个题比较巧妙地解法在于逆向求解。比如数组 [1, 2, 3]，按照对非最大值加 1 的思路，移动 1 次后得到 [2, 3, 3]。逆向求解的思路就是对非最小值减 1，那么将得到 [1, 2, 2]。其实两种思路对于数组间各项的差距是一样的。那么，这样我们就可以先找到最小值，然后累加数组各项与最小值的差。

```js
var minMoves = function(nums) {
  let min = Infinity;
  let count = 0;
  nums.forEach(item => min = item < min ? item : min);
  nums.forEach(item => count += (item - min));
  return count;
};
```



## 相关推荐

我为你挑选的关于[贪心算法](/art/greedy.html)的题目：

- [100]()
- [111]()
