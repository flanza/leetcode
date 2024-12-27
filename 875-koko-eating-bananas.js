/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let low = 1, high = piles.reduce((max, i) => Math.max(max, i), 0), mid, result = high;
  while(low <= high) {
      mid = Math.floor((low + high) / 2);
      const hours = piles.reduce((time, i) => time + Math.ceil(i / mid), 0);
      if (hours <= h) {
        result = Math.min(result, mid);
        high = mid - 1;
      } else {
          low = mid + 1;
      }
      
  }

  return result;
};

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 6));
console.log(minEatingSpeed([312884470], 312884469));
