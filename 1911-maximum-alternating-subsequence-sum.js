var maxAlternatingSum = function (nums) {
  return maxAlternatingSumBottomTop(nums);
}

var maxAlternatingSumBottomTop = function (nums) {
  let even = 0, odd = 0;
  for (let i = nums.length -1; i >= 0; i--) {
    const tmpEven = Math.max(odd + nums[i], even);
    const tmpOdd = Math.max(even - nums[i], odd);
    [even, odd] = [tmpEven, tmpOdd];
  }
  return even;
}

var maxAlternatingSumTopBottom = function (nums) {
  const dp = {};

  const dfs = (i, even) => {
    const dpKey = even ? 'even' : 'odd';
    if (i === nums.length) return 0;
    if (dp[i] && dp[i][dpKey]) return dp[i][dpKey];

    if (!dp[i]) dp[i] = {};

    const num = even ? nums[i] : (-1 * nums[i]),
          useThisItem = num + dfs(i + 1, !even),
          skipThisItem = dfs(i + 1, even);
    
    dp[i][dpKey] = Math.max(useThisItem, skipThisItem);
    return dp[i][dpKey];
  }

  const result = dfs(0, true);
  return result;
};

const data = [
  { nums: [3,2,9,2,10], output: 18 },
  { nums: [2, 1, 5, 4, 4], output: 6 },
  { nums: [4, 2, 5, 3], output: 7 },
  { nums: [5, 6, 7, 8], output: 8 },
  { nums: [6,2,1,2,4,5], output: 10 }
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = maxAlternatingSum(d.nums);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}