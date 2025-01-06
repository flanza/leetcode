/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Number.MAX_SAFE_INTEGER, l  = 0, sum = 0;

    for(let r = 0; r < nums.length; r++) {
      while (sum + nums[r] >= target) {
        result = Math.min(result, r - l + 1);
        sum -= nums[l];
        l++;
      }
      sum += nums[r];
    }

    return result === Number.MAX_SAFE_INTEGER ? 0 : result;

};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));
