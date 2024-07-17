/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0], sell = 0, profit = 0;

  for(let i=1;i<prices.length;i++) {
      sell = prices[i];
      if (sell > buy)
          profit = Math.max(profit, sell - buy);
      else
          buy = sell;
  }

  return profit;
};

const prices = [7,1,5,3,6,4];
// const prices = [7,6,4,3,1];
const profit = maxProfit(prices);
console.log(profit);