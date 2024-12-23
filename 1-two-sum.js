var twoSum = function(nums, target) {
  const map = nums.reduce((acc, num, idx) => {
    acc[num] = idx;
    return acc;
  }, {})

  for(let i = 0; i < nums.length; i++) {
    const reminder = target - nums[i];
    if (map[reminder] !== undefined && map[reminder] !== i)
      return [i, map[reminder]];
  }
  return [];
};


const data = [
  { nums: [2,7,11,15], target: 9, output: [0,1] },
  { nums: [3,2,4], target: 6, output: [1,2] },
  { nums: [3,3], target: 6, output: [0,1] },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = twoSum(d.nums, d.target);
  console.log('result = ', result);
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}