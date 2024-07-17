/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [0, 1, 2];

    for(let i = 3 ; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

const data = [
  { stairs: 1, output: 1},
  { stairs: 2, output: 2 },
  { stairs: 3, output: 3 },
  { stairs: 4, output: 3}
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = climbStairs(d.stairs);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}