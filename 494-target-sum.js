var findTargetSumWays = function (nums, target) {
  const result = findTargetSumWaysBottomTop(nums, target);
  return result;
}

var findTargetSumWaysBottomTop = function (nums, target) {
  let sum = nums.reduce((sum, num) => sum + num, 0);
  if (target > sum || -target < -sum || (target < 0 && target < -sum)) return 0;

  const length = 2 * sum + 1;
  let dp = Array.from({ length }, () => 0);
  dp[sum] = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i], next = Array.from({ length }, () => 0);
    for (let j = 0; j < dp.length; j++) {
      if (dp[j] == 0) continue;
      next[j + num] += dp[j];
      next[j - num] += dp[j];
    }
    dp = next;
  }

  return dp[sum + target];
}

const defaultValue = Number.MIN_SAFE_INTEGER;
const limitSpan = 1000;
var findTargetSumWaysTopBottom = function (nums, target) {
  let dp = Array.from({ length: nums.length + 1 }, () => Array(2 * limitSpan + 1).fill(defaultValue));
  const dfs = (index, sum) => {
    if (index === nums.length) return sum === target ? 1 : 0;
    if (dp[index][sum + limitSpan] !== defaultValue) return dp[index][sum + limitSpan];

    let add = dfs(index + 1, sum + nums[index]);
    let subtract = dfs(index + 1, sum - nums[index]);

    let ans = add + subtract;
    dp[index][sum + limitSpan] = ans;
    return ans;
  }

  return dfs(0, 0);
};

const data = [
  {nums: [100,100], target: -400, output: 0},
  { nums: [2, 7, 9, 13, 27, 31, 37, 3, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 47, 53], target: 117, output: 0 },
  { nums: [1, 1, 1, 1, 1], target: 3, output: 5 },
  { nums: [1], target: 1, output: 1 }
];


for (let d of data) {
  console.log(JSON.stringify(d));
  const result = findTargetSumWays(d.nums, d.target);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}