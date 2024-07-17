/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;

  for(let i=1;i<prices.length;i++) {
      const buy = prices[i-1];
      const sell = prices[i];
      if (sell > buy) {
          profit += sell - buy;
      }
  }

  return profit;
    
};

const data = [
  [7,1,5,3,6,4],
  [1,2,3,4,5],
  [7,6,4,3,1]
];

for (let i = 0; i< data.length; i++) {
  const prices = data[i];

  const profit = maxProfit(prices);
  console.log(prices, ' - ', profit);
}