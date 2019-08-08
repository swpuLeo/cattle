# 0746 使用最小花费爬楼梯


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/min-cost-climbing-stairs/)  [力扣](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0746-find-pivot-index.js)






## 题目描述

数组的每个索引做为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。


示例 1:

```
输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
```

示例 2：

```
输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
```


注意:
- nums 的长度范围为 [0, 10000]。
- 任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/min-cost-climbing-stairs/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [];
  const len = cost.length;
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[len - 1], dp[len - 2]);
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
