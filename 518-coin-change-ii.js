// https://leetcode.com/problems/coin-change-ii/description/

var change = function(amount, coins) {
  let lastRow = [], currRow = [];

  for(let coinIdx = coins.length - 1; coinIdx >= 0; coinIdx--) {
    currRow[0] = 1;
    for(let tmpAmount = 1; tmpAmount <= amount; tmpAmount++) {
      const prevAmount = tmpAmount - coins[coinIdx];
      const result = (prevAmount < 0 ? 0 : currRow[prevAmount]) + (lastRow[tmpAmount] ?? 0);
      currRow[tmpAmount] = result;
    }
    lastRow = currRow;
    currRow = [];
  }
  return lastRow[amount];
};



const data = [
  {coins: [1,2,5], amount: 5, output: 4},
  { coins: [3], amount: 2, output: 0 },
  { coins: [10], amount: 10, output: 1 }
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = change(d.amount, d.coins);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}