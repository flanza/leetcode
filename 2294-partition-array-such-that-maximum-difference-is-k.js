
const calculateDiff = (min, max) => max - min;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
  nums.sort((a,b) => a-b);
  let result = 0;

  let start = 0, end = 0, max = nums[start], min = nums[end];
  while (end < nums.length) {
    min = Math.min(min, nums[start]);
    max = Math.max(max, nums[end]);

    const currDiff = calculateDiff(min, max), nextDiff = calculateDiff(Math.min(min, nums[end + 1]), Math.max(max, nums[end + 1]));
    const zeroK = k === 0 && (nextDiff !== 0 || currDiff > 0);
    if (currDiff <= k && (nextDiff > k || isNaN(nextDiff) || zeroK)) {
      result++;
      start = end = end + 1;
      min = Number.MAX_SAFE_INTEGER;
      max = 0;
    } else if (currDiff > k) {
      start++;
    } else {
      end++;
    }
  }


  return result;
};

data = [
  { nums: [3,6,1,2,5], k: 2, output: 2},
  { nums: [1,2,3], k: 1, output: 2 },
  { nums: [2,2,4,5], k: 0, output: 3}
];


for (const d of data) {
  console.log(JSON.stringify(d));
  const result = partitionArray(d.nums, d.k);
  console.log('result = ', JSON.stringify(result));
  console.log('----------');
}
