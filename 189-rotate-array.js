/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const pivot = k % nums.length;
  reverse(nums, 0, nums.length-1);
  reverse(nums, 0, pivot-1);
  reverse(nums, pivot, nums.length-1);
};

function reverse(array, start, end) {
  while (start < end) {
    const tmp = array[start];
    array[start] = array[end];
    array[end] = tmp;
    start++;
    end--;
  }
}

// function reverse (array) {
//   var i = 0,
//       n = array.length,
//       middle = Math.floor(n / 2),
//       temp = null;

//   for (; i < middle; i += 1) {
//      temp = array[i];
//      array[i] = array[n - 1 - i];
//      array[n - 1 - i] = temp;
//   }
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8], k = 3;
// const nums = [-1,-100,3,99], k = 2;
const nums = [1,2], k=5;
rotate(nums, k);
// reverse(nums)
console.log('nums = ', nums);

/*
src = [1,2,3,4,5,6,7]
tar = [5,6,7,1,2,3,4]
      [0,1,2,3,4,5,6]

0 => 4
1 => 5
2 => 6
3 => 6
*/
