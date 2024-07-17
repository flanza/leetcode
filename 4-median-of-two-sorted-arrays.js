// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length === 0) {
    return findMedian(nums2);
  }

  const len = nums1.length + nums2.length;
  const mid = Math.floor(len / 2);

  let pos1 = 0;
  for (let i = 0; i <= mid && i < nums2.length; i++) {
    const mergeCandidate = nums2[i];

    if (mergeCandidate >= nums1[nums1.length - 1]) {
      nums1.push(mergeCandidate);;
      continue;
    } else if (mergeCandidate <= nums1[0]) {
      nums1.unshift(mergeCandidate);
      continue;
    }

    for (let j = pos1; j < nums1.length; j++) {
      const curr = nums1[j];
      const next = nums1[j + 1];
      if (mergeCandidate >= curr && (mergeCandidate < next || next === undefined)) {
        nums1.splice(next ? j+1 :  j, 0, mergeCandidate);
        pos1 = j;
        break;
      }
    }
  }
  const result = len % 2 > 0
    ? nums1[mid]
    : (nums1[mid - 1] + nums1[mid]) / 2;

  return result;
}

var findMedianSortedArrays2 = function (nums1, nums2) {
  if (!nums1.length) {
    nums1 = nums2;
  } else {
    let pos1 = nums1.length - 1;
    for (let i = nums2.length - 1; i >= 0; i--) {
      const mergeCandidate = nums2[i];

      if (mergeCandidate >= nums1[nums1.length - 1]) {
        nums1.push(mergeCandidate);
        pos1++;
        continue;
      } else if (mergeCandidate <= nums1[0]) {
        nums1.unshift(mergeCandidate);
        pos1++;
        continue;
      }

      for (let j = pos1; j >= 0; j--) {
        const curr = nums1[j];
        const next = nums1[j - 1];

        if (mergeCandidate <= curr && (mergeCandidate > next || isNaN(next))) {
          nums1.splice(j, 0, mergeCandidate);
          pos1 = j;
          break;
        }
      }
    }
  }

  console.log('merged = ', nums1);
  const result = findMedian(nums1);
  return result;
};

const findMedian = (arr)  => {
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 > 0) {
    return arr[mid];
  } else {
    return (arr[mid] + arr[mid - 1]) / 2;
  }
}


////////////
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const createRandomSortedArray = (n, max, min = 0) => {
  if (max - min + 1 < n) {
    throw new Error('Range is too small to generate a unique array of this size');
  }

  const set = new Set();
  while (set.size < n) {
    const r = random(min, max);
    set.add(r);
  }

  const arr = Array.from(set).sort((a, b) => a - b);
  return arr;
}

const process = (nums1, nums2, output) => {
  console.log("nums1  = ", nums1);
  console.log("nums2  = ", nums2);
  const result = findMedianSortedArrays(nums1, nums2);
  console.log("median = ", result);
  if (output !== undefined)
    console.log("result = ", result === output);
  console.log('----------');

}

// const nums1 = createRandomSortedArray(random(1, 10), random(20, 150));
// const nums2 = createRandomSortedArray(random(1, 10), random(20, 150));
// process(nums1, nums2);


data = [
  {nums1: [3], nums2: [-2,-1], output: -1}, 
  { nums1: [2, 11, 18, 26], nums2: [1, 5, 16, 23, 35, 36, 40, 47, 50], output: 23},
  { nums1: [], nums2: [1], output: 1 },
  { nums1: [1, 3], nums2: [2], output: 2 },
  { nums1: [1, 2], nums2: [3, 4], output: 2.5 }
];

for (const d of data) {
  const { nums1, nums2, output } = d;
  process(nums1, nums2, output);
}