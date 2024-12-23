/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    } 
  }
  return k;
};

var nums = [0,1,2,2,3,0,4,2];
var val = 2;
const k = removeElement(nums, val);
console.log(nums);
console.log(k);