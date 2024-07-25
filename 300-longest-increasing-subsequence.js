/*
 - Subproblem: lis([i:])
 - Relation: 1 + max( list(i)... list(n) )
 - Topological order: decreasing i
 - Base case: empty sequence
 - Original Problem: lis(0)
*/
var lengthOfLIS = function(nums) {
  const dp = [];

  let result = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    dp[i] = 1;
    const curr = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let next = nums[j];
      if (curr < next) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }

    result = Math.max(result, dp[i]);
  }

  return result;
};

const data = [
  { nums: [10,9,2,5,3,7,101,18], output: 4 },
  { nums: [0,1,0,3,2,3], output: 4 },
  { nums: [7,7,7,7,7,7,7], output: 1 },
  { nums: [99, 97, 114, 98, 111, 104, 121, 100, 114, 97, 116, 101], output: 5}
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = lengthOfLIS(d.nums);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}