var maxSubArray = function (nums) {
  let maxSum = nums[0], currSum = 0;

  for(let i = 0; i < nums.length; i++) {
    currSum = Math.max(currSum, 0) + nums[i];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

const data = [
  {
    nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    output: 6
  }
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = maxSubArray(d.nums);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}