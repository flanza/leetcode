/*
 - Subproblem: lcs(i, j) where i and j are the suffix subsequences for text1 and text2
 - Relation: max( lcs(i+1, j), lcs(i, j+1) ) in case letters don't match, else 1 + lcs(i + 1, j + 1)
 - Topological order: ascending i and j
 - Base case: either of the sufixes are empty
 - Original Problem: lcs(0,0)
 - Time: linear time text1.length * text2.length
*/

var longestCommonSubsequence = function (text1, text2) {
  const result = longestCommonSubsequenceBottomTop(text1, text2);
  // const result = longestCommonSubsequenceTopBottom(text1, text2);

  return result;
}

var longestCommonSubsequenceBottomTop = function (text1, text2) {
  const dp = Array.from({length: text1.length + 1}, () => Array.from({length: text2.length + 2}, () => 0));

  for(let i = text1.length - 1; i >= 0; i--) {
    for(let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
}

var longestCommonSubsequenceTopBottom = function (text1, text2) {
  const memo = {};
  const lcs = (i, j) => {
    const key = `${i}-${j}`;
    if (memo[key] !== undefined) {
      return memo[key];
    }

    if (i >= text1.length || j >= text2.length) {
      return 0;
    }

    memo[key] = (text1[i] === text2[j])
      ? 1 + lcs(i + 1, j + 1)
      : Math.max(lcs(i + 1, j), lcs(i, j + 1));

    return memo[key];
  };
  
  return lcs(0, 0);
};

const data = [
  { text1: "hieroglyphology", text2: "michaelangelo", output: 5 },
  { text1: "abcde", text2: "ace", output: 3 },
  { text1: "abc", text2: "abc", output: 3 },
  { text1: "abc", text2: "def", output: 0 },
  { text1: "pmjghexybyrgzczy", text2: "hafcdqbgncrcbihkd", output: 4 },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = longestCommonSubsequence(d.text1, d.text2);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}