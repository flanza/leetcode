const getCapacity = (height, l, r) => 
  (r - l) * Math.min(height[l], height[r])

/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function(height) {
  let maxCapacity = 0, l = 0, r = height.length - 1;
  while(l < r) {
      maxCapacity = Math.max(maxCapacity, getCapacity(height, l, r));
      if (height[l] > height[r])
          r--;
      else
          l++;
  }
  return maxCapacity
};