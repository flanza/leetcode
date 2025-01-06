/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let globalMax = globalMin = nums[0], currMax = currMin = 0, totalSum = 0;

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    currMax = Math.max(currMax, 0) + num;
    globalMax = Math.max(currMax, globalMax);

    currMin = Math.min(currMin, 0) + num;
    globalMin = Math.min(currMin, globalMin);

    totalSum += num;
  }

  return globalMax < 0 ? globalMax : Math.max(globalMax, totalSum - globalMin);

};

const data = [
  {
    nums: [1, -2, 3, -2],
    output: 3
  },
  {
    nums: [5, -3, 5],
    output: 10
  },
  {
    nums: [-3,-2,-3],
    output: -2
  }

];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = maxSubarraySumCircular(d.nums);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}