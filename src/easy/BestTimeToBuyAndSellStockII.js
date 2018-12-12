/**
 * @param {number[]} prices
 * @return {number}
 */
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
