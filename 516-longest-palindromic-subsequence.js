var longestPalindromeSubseq = function (s) {
  const s2 = s.split('').reduce((acc, i) => i + acc, '');
  
  const dp = Array.from({ length: s.length + 1}, () => new Array(s.length + 1).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = s2.length - 1; j >= 0; j--) {
      if (s[i] === s2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[0][0];
};

const data = [
  { s: "aabaaba", "output": "abaaba"},
  { s: "abcdef", output: "a"},
  { s: "aabaa", output: "aabaa"},
  { s: "bbbab", output: "bbbb"},
  { s: "cbbd", output: "bb"},
  { s: "character", output: "carac"},
  { s: "turboventilator", output: "rotator"},
  { s: "underqualified", output: "deified"},
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = longestPalindromeSubseq(d.s);
  console.log('result = ', result);
  (result === d.output.length) ? console.log('ok') : console.error('nok');
  console.log('----------');
}