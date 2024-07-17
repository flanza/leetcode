/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   const used = {};
//   for(let i = 0; i < nums.length; i++) {
//     const val = nums[i];
//     if (val === nums[i+1]) {
//       if (used[val])
//         nums.splice(i--, 1);
//       else
//         used[val] = true;
//     }
//   }
//   return nums.length;
// };

var removeDuplicates = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i+1] && nums[i] === nums[i-1]) 
        nums.splice(i--, 1);
  }
  return nums.length;
};

// const nums = [1,1,1,2,2,3];
const nums = [0,0,1,1,1,1,2,3,3];
const k = removeDuplicates(nums);
console.log('k = ', k);
console.log('nums = ', nums);