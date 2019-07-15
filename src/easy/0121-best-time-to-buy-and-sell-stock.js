/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0 // 最大利润
  let cur = 0 // 当前利润
  let index = 0 // 表示买入当天

  // i 表示卖出当天
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
