/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const size = nums.length;
  let k = 0;
  let limit = nums.length;
  for(let i = 0; i < limit; i++) {
    const tmpVal = nums[i];
    if (tmpVal === val) {
      nums.splice(i, 1);
      nums.push('_');
      k++; limit--; i--;
    }
  }
  return size - k;
};

var nums = [0,1,2,2,3,0,4,2];
var val = 2;
const k = removeElement(nums, val);
console.log(nums);
console.log(k);