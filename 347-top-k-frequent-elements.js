/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  nums.forEach(num => map.set(num, (map.get(num) ?? 0) + 1));

  const sorted = Array.from(map.entries()).sort((a, b) => b[1]-a[1] );
  return sorted.slice(0, k).map(e => e[0]);
}

var topKFrequent2 = function(nums, k) {
  const frequencies = [];
  let frequencyIdxs = {};

  for(let i =0 ; i< nums.length; i++) {
    const num = nums[i];
    let f;
    if (frequencyIdxs[num] !== undefined) {
      f = frequencies[frequencyIdxs[num]];
    } else {
      f = { num, qty: 0 };
      frequencies.push(f);
      frequencyIdxs[num] = frequencies.length - 1;
    }
    f.qty++;
    heapifyUp(frequencies, frequencyIdxs);
  }


  let result = [];
  for(let i=0; i < k && i < frequencies.length; i++) {
    result.push(frequencies[i].num);
  }

  return result;
};

const heapifyUp = function(items, idxs) {
  for(let i = items.length - 1; i >= 0; i--) {
    const parent = Math.floor((i-1)/2);
    if (items[parent] && items[parent].qty <= items[i].qty) {
      [idxs[items[parent].num], idxs[items[i].num]] = [i, parent];
      [items[parent], items[i]] = [items[i], items[parent]];
    }
  }
}

const data = [
  { nums: [5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3], k:3, expected: [3,7,10]},
  // { nums: [5,3,1,1,1,3,73,1], k:1, expected: [1]},
  // {nums: [4,1,-1,2,-1,2,3], k: 2, expected: [2, -1]},
  // {nums: [5,2,5,3,5,3,1,1,3], k: 2, expected: [5,1]},
  // {nums: [1,1,1,2,2,3], k: 2, expected: [1,2]},
  // {nums: [1,], k: 1, expected: [1]},
];

for(const d of data) {
  console.log(JSON.stringify(d));
  const result = topKFrequent(d.nums, d.k);
  console.log(result);
  console.log('---------');
}