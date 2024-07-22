// https://leetcode.com/problems/coin-change/description/

var coinChange = function (coins, amount) {
  // const result = coinChangeTopBottom(coins, amount);
  const result = coinChangeBottomTop(coins, amount);
  return result;
};

var coinChangeBottomTop = function (coins, amount) {
  const dp = [0];

  for(let i = 1; i <= amount; i++) {
    let minCoins = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      const coinsUsed = (dp[i - coin] ?? Number.MAX_SAFE_INTEGER) + 1;
      minCoins = Math.min(minCoins, coinsUsed);
    }
    dp[i] = minCoins;
  }

  const result = dp[amount];
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

var coinChangeTopBottom = function (coins, amount) {
  const memo = {};

  const dfs = (amountLeft) => {
    if (memo[amountLeft]) {
      return memo[amountLeft];
    }

    if (amountLeft === 0) {
      return 0;
    }

    let minCoins = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < coins.length; i++) {
      const newAmount = amountLeft - coins[i];
      if (newAmount < 0) {
        continue;
      }

      const answer = dfs(newAmount) + 1;
      minCoins = Math.min(minCoins, answer);
    }

    memo[amountLeft] = Math.min(memo[amountLeft] ?? Number.MAX_SAFE_INTEGER, minCoins);
    return minCoins;
  }

  const result = dfs(amount);
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

const data = [
  {coins: [2], amount: 1, output: -1},
  { coins: [1, 4, 5], amount: 13, output: 3 },
  { coins: [1,2,3,4,5], amount: 7, output: 2 },
  { coins: [186, 419, 83, 408], amount: 6249, output: 20 },
  { coins: [1, 2, 5], amount: 11, output: 3 },
  { coins: [5, 2, 1], amount: 11, output: 3 },
  { coins: [2], amount: 3, output: -1 },
  { coins: [1], amount: 0, output: 0 },
];


for (let d of data) {
  console.log(JSON.stringify(d));
  const result = coinChange(d.coins, d.amount);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}