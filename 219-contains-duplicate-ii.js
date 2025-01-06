/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num] !== undefined && Math.abs(map[num] - i) <= k) {
      return true;
    }

    map[num] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
