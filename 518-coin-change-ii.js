// https://leetcode.com/problems/coin-change-ii/description/

var change = function (amount, coins) {
  // const result = changeTopBottom(amount, coins);
  const result = changeBottomTop(amount, coins);
  return result;
};

var changeBottomTop = (amount, coins) => {
  const dp = Array.from({ length: amount + 1 }, () => 0);
  dp[0] = 1;

  for(let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for(let j = coin; j <= amount; j++) {
      dp[j] += dp[j - coin];
    }
  }

  return dp[amount];
}

var changeTopBottom = (amount, coins) => {
  const memo = {};
  const dfs = (i, currentAmount) => {
    const key = `${i}-${currentAmount}`;
    if (memo[key] !== undefined) {
      return memo[key];
    }

    if (currentAmount === amount) {
      return 1;
    }

    let count = 0;
    for (let j = i; j < coins.length; j++) {
      const newAmount = currentAmount + coins[j];
      if (newAmount > amount) {
        continue;
      }
      count += dfs(j, newAmount);
    }

    memo[key] = count;

    return count;
  };

  const result = dfs(0, 0);
  return result;
}

const data = [
  { coins: [1, 2, 5], amount: 5, output: 4 },
  { coins: [2], amount: 3, output: 0 }
];


for (let d of data) {
  console.log(JSON.stringify(d));
  const result = change(d.amount, d.coins);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}