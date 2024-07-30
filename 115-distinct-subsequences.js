var numDistinct = function (s, t) {
  const dp = Array.from({ length: t.length + 1 }, (_, idx) => Array.from({length: s.length + 1}, () => idx === t.length ? 1 : 0));

  for(let i = t.length - 1; i >= 0; i--) {
    for(let j = s.length - 1; j >= 0; j--) {
      dp[i][j] = dp[i][j + 1];
      if (t[i] === s[j]) {
        dp[i][j] += dp[i + 1][j + 1];
      }
    }
  }

  return dp[0][0];
};

const data = [
  { s: "rabbbit", t: "rabbit", output: 3 },
  { s: "babgbag", t: "bag", output: 5 },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = numDistinct(d.s, d.t);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}