var maxAlternatingSum = function (nums) {
  let maxDiff = 0, max = nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    let evenSum = i % 2 == 0 ? nums[i] : 0, oddSum = i % 2 != 0 ? nums[i] : 0;
    for (let j = i + 1; j < nums.length; j++) {
      j % 2 === 0 ? (evenSum += nums[j] ) : (oddSum += nums[j]);
      maxDiff = Math.max(maxDiff, evenSum - oddSum);
    }
    max = Math.max(max,nums[i]);
  }

  return Math.max(maxDiff, max);

};

const data = [
  // { nums: [3,2,9,2,10], output: 18 },
  // { nums: [2, 1, 5, 4, 4], output: 6 },
  // { nums: [4, 2, 5, 3], output: 7 },
  // { nums: [5, 6, 7, 8], output: 8 },
  { nums: [6, 2, 1, 2, 4, 5], output: 10 }
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = maxAlternatingSum(d.nums);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}