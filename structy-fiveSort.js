const WANTED = 5;
const fiveSort = (nums) => {
  let l = 0, r = nums.length - 1;
  while(l < r) {
    if (nums[r] === WANTED) {
      r--;
    } else if (nums[l] === WANTED) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    } else {
      l++;
    }
  }

  return nums;
  
};

module.exports = {
  fiveSort,
};

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
