var longestPalindromeSubseq = function (s) {
  const helper = (i, j) => {
    let left = i, right = j;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  }

  let ans = "";

  for(let i = 0; i < s.length; i++) {
    const odd = helper(i, i);
    if (odd.length > ans.length) {
      ans = odd;
    }

    const even = helper(i, i + 1);
    if (even.length > ans.length) {
      ans = even;
    }
  }

  return ans;

};

var longestPalindromeDp = function (s) {
  let ans = [0,0];
  let dp = [];

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    dp[i][i] = true;
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ans = [i, i + 1];
    }
  }

  for (let diff = 2; diff < s.length; diff++) {
    for (let i = 0; i < s.length - diff; i++) {
      const j = i + diff;
      const areEqual = s[i] === s[j];
      const isPalindrome = dp[i + 1][j - 1];
      if (areEqual && isPalindrome) {
        dp[i][j] = true;
        ans = [i, j];
      }
    }
  }

  return s.slice(ans[0], ans[1] + 1);
};

const data = [
  { s: "racecar", output: "racecar" },
  { s: "ccc", output: "ccc" },
  { s: "babad", output: "bab" },
  { s: "cbbd", output: "bb" }
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = longestPalindromeSubseq(d.s);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}