var canPartition = function(nums) {
  let totalSum = nums.reduce((sum, num) => sum+ num, 0);
  if (totalSum % 2 !== 0) {
    return false;
  }

  const result = canPartitionBottomTop(nums, totalSum / 2);
  return result;
    
};

var canPartitionBottomTop = function(nums, target) {
  let dp = new Set([0]);
  for (let i = nums.length - 1; i >= 0; i--) {
    const nextDp = new Set();
    const num = nums[i];
    for(const j of dp) {
      const sum = num + j;
      if (sum === target) return true;
      nextDp.add(j);
      nextDp.add(sum);
    }
    dp = nextDp;
  }

  return false;
};

var canPartitionTopBottom = function(nums, target) {
  const dp = {};
  const dfs = (i, amt) => {
    if (!dp[i]) dp[i] = {};
     if (i === nums.length || amt === target) {
       return amt === target;
     }
 
     const num = nums[i],
           useThisValue = dfs(i + 1, amt + num),
           skipThisValue = dfs(i + 1, amt);

     dp[i][amt] = useThisValue || skipThisValue;
     return dp[i][amt];
   };
   const result = dfs(0, 0);
   return result;
}

const data = [
  { nums: [1,5,11,5], output: true },
  { nums: [1,2,3,5], output: false }
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = canPartition(d.nums);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}