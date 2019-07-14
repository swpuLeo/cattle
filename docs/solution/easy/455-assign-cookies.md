# 455 分发饼干

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[贪心算法](/art/greedy.html)

来源：[LeetCode](https://leetcode.com/problems/assign-cookies/)  [力扣](https://leetcode-cn.com/problems/assign-cookies/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/AssignCookies.js)

:::



## 题目描述

假设你是一位很棒的家长，想要给你的孩子们分一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i，都有一个胃口值 gi，只是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 sj。如果 sj ≥ gi，我们可以将这个饼干 j 分给孩子 i，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

注意：你可以假设胃口值为正；一个小朋友最多只能拥有一块饼干。

示例如下：

```
输入: [1,2,3], [1,1]
输出: 1
解释: 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。



输入: [1,2], [1,2,3]
输出: 2
解释: 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
```



## 解题思路

按照题目意思，尽量满足越多的小朋友，我的思路是，将小朋友的胃口值排序，然后将饼干尺寸进行排序。用两个指针指向最小的胃口值和最小的饼干尺寸。如果饼干尺寸能满足当前小朋友的胃口，两个指针均移到下一位，否则，指向饼干尺寸的指针移动到下一位。

```js
var findContentChildren = function(g, s) {
  const sortFunc = (a, b) => a - b;
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0, j = 0;
  let count = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      count += 1;
      j += 1;
      i += 1;
    } else {
      j += 1;
    }
  }
  return count;
};
```



## 相关推荐

我为你挑选的关于[贪心算法](/art/greedy.html)的题目：

- [100]()
- [111]()
