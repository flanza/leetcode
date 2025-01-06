/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let result = 0, sum = 0, size = 0;
  for(let i = 0; i < arr.length + 1; i++) {
    if (size === k) {
      if (sum / k >= threshold) {
        result++;
      }

      sum -= arr[i - k];
      size--;

    }

    sum += arr[i];
    size++;
  }
  return result;
    
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4));
console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5));
