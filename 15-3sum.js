var threeSum = function(nums) {
  const result = [];
  const map = nums.reduce((acc, n) => {
      acc[n] = (acc[n] ?? 0) + 1;
      return acc;
  }, {});

  const isValid = (i, j) => {
      return i !== j || map[i] > 0;
  }

  for (let i =0; i < nums.length; i++) {
      for(let j = 0; j < nums.length; j++) {
          if (i === j) continue;
          const wanted = 0 - nums[i] + nums[j];
          if (map[wanted] && isValid(wanted, nums[i]) && isValid(wanted, nums[j])) {
              map[wanted]--; map[nums[i]]--; map[nums[j]]--;
              result.push([nums[i], nums[j], wanted]);
          }
      }
  }

  return result;
};


console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])));