// https://leetcode.com/problems/coin-change/description/

var min = (a, b) => {
  if (!a) return b;
  if (!b) return a;
  return Math.min(a, b);
};

var coinChange = function (coins, amount) {
  const defaultAmount = amount + 1;
  const dp = new Array(defaultAmount).fill(defaultAmount);
  dp[0] = 0;
  
  for(let tmpAmount = 1; tmpAmount <= amount; tmpAmount++) {
    for(const coin of coins) {
      const prevResult = tmpAmount - parseInt(coin);
      if (prevResult < 0) continue;
      dp[tmpAmount] = Math.min(dp[tmpAmount], (dp[prevResult] ?? 0) + 1);
    }
  }

  return dp[amount] === defaultAmount ? -1 : dp[amount]
};


// var coinChange = function (coins, amount) {
//   const memo = {};

//   const doChange = (coins, amount) => {
//     if (memo[amount]) {
//       return memo[amount];
//     }

//     let result;
//     if (amount > 0) {
//       for (let i = 0; i < coins.length; i++) {
//         const amountLeft = amount - coins[i];
//         if (amountLeft < 0) {
//           continue;
//         }

//         const answer = doChange(coins, amountLeft);
//         if (answer !== undefined)
//           result = min(result, answer + 1);
//       }
//     } else
//       result = 0;

//     memo[amount] = result;
//     return result;
//   };
//   return doChange(coins, amount) ?? -1;
// };

const data = [
  {coins: [2], amount: 1, output: -1},
  { coins: [1, 4, 5], amount: 13, output: 3 },
  { coins: [1,2,3,4,5], amount: 7, output: 2 },
  { coins: [186, 419, 83, 408], amount: 6249, output: 20 },
  { coins: [1, 2, 5], amount: 11, output: 3 },
  { coins: [2], amount: 3, output: -1 },
  { coins: [1], amount: 0, output: 0 },
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = coinChange(d.coins, d.amount);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}