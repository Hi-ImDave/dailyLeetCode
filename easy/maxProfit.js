let maxProfit = (prices) => {
  let profit = 0
  let buyPrice = prices[0]
  for (let i = 1; i < prices.length; ++i) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i]
    } else if (prices[i] - buyPrice > profit) {
      profit = prices[i] - buyPrice
    }
  }
  return profit
}
