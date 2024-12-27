/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  nums = nums.reverse();
  let left = 0, right = nums.reduce((max,i) => Math.max(max,i),0), mid;

  const isGood = target => {
    let carry = 0;

    for(let x of nums) {
      x += carry;
      carry = 0;
      if (x >= target) {
        carry = x - target;
      }
    }

    return carry == 0;
  }

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (isGood(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};


console.log(minimizeArrayValue([3,7,1,6]));

