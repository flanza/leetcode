/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let idx1 = 0;
  let idx2 = 0;
  let tmp = []
  while(tmp.length < m + n) {
      let tmp1 = idx1 < m ? nums1[idx1] : Number.MAX_VALUE;
      let tmp2 = idx2 < n ? nums2[idx2] : Number.MAX_VALUE;

      if (tmp1 <= tmp2) {
          tmp.push(tmp1);
          idx1++;
      }
      
      if (tmp1 >= tmp2) {
          tmp.push(tmp2);
          idx2++;
      }
  }
  if (tmp.length > nums1.length) nums1.splice(tmp.length)
  for(let i =0; i< tmp.length;i++) nums1[i] = tmp[i];
};

var nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3)
console.log(nums1);