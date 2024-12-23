/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let l = 1;
  for(let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[r-1]) {
      nums[l] = nums[r];
      l++;
    }
  }

  return l;
};

const nums = [0,0,1,1,1,2,2,3,3,4]
// const nums = [1,1,2];
const k = removeDuplicates(nums);
console.log('k = ', k);
console.log('nums = ', nums);