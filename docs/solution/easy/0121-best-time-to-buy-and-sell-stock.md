# 0121 买卖股票的最佳时机



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 动态规划

来源：[LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)  [力扣](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0121-best-time-to-buy-and-sell-stock.js)






## 题目描述

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

示例 2:

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  let cur = 0
  let index = 0

  for (let i = 1; i <= prices.length - 1; i++) {
    cur = prices[i] - prices[index]
    if (cur > 0) {
      if (cur > max) {
        max = cur
      }
    } else {
      index = i
    }
  }

  return max
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
