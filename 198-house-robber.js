var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    let max = 0;

    for(let j = i - 2; j >= 0; j--) {
      if (dp[j] > max) {
        max = dp[j];
      }
    }

    dp[i] = max + nums[i];
  }

  return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};

const data = [
  { nums: [1, 3, 1, 3, 100], output: 103 },
  { nums: [1,2,3,1], output: 4},
  { nums: [2,7,9,3,1], output: 12 },
  { nums: [2,1,1,2], output: 4},
  { nums: [1,2], output: 2},
  { nums: [1,3,1], output: 3}
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = rob(d.nums);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}