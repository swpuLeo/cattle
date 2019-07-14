# 122 买卖股票的最佳时机 II

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[贪心算法](/art/greedy.html)

来源：[LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)  [力扣](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/BestTimeToBuyAndSellStockII.js)

:::



## 题目描述

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你能获取的最大利润，你可以尽可能完成更多的交易（多次买卖一只股票）。注意：你不能同时参与多笔交易，你必须在再次购买前出售之前的股票。

示例如下：

```
示例 1

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出,
这笔交易所能获得利润 = 5-1 = 4 。随后，在第 4 天（股票价格 = 3）的时候买入，
在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。


示例 2

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出,
这笔交易所能获得利润 = 5-1 = 4 。注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。


示例 3

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```


## 解题思路

这个题目和 LeetCode | 121 买卖股票的最佳时机 的区别在于，它允许多次交易。

![122-illustration](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/122-illustration.webp)

在只允许交易一次的情况下，我们已经知道在第 2 天买入，第 5 天售出可获得做大利润。

但是，本题允许多次交易，从而将这个问题转化为找到一个无序序列的所有递增子序列，并求他们的差值和。这样我们需要两个指针分别指向买入和卖出当天，循环序列，但是在判断递增的时候有些麻烦。

再想想这个问题还能怎样简化，能不能不找出所有的递增子序列？

可以的，通过循环比较前后两天的价格，如果跌了，那么本次记 0，如果涨了，那么本次累加。

```js
var maxProfit = function(prices) {
  if (!prices) return 0
  if (prices.length < 2) return 0
  let ret = 0
  let length = prices.length
  for(let i = 1; i < length; i++) {
    ret += Math.max(0, prices[i] - prices[i - 1])
  }
  return ret
};
```



## 相关推荐

我为你挑选的[贪心算法](/art/greedy.html)题目：
