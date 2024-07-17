const { MinHeap } = require("./heap-min");

const calculateDistance = (point) => Math.pow(Math.abs(point[0]), 2) +  Math.pow(Math.abs(point[1]), 2);

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  if (k === points.length) {
    return points;
  }

  const heap = points.reduce((h, point) => {
    h.add(point);
    return h;
  }, new MinHeap(calculateDistance));

  let result = [];
  for(let i=0; i < k; i++) {
    result.push(heap.pop());
  }

  return result;
};

const data = [
  { points: [[1,3],[-2,2]], k: 1, output: [[-2,2]] },
  { points: [[3,3],[5,-1],[-2,4]], k: 2, output: [[3,3],[-2,4]] }
]

for (const d of data) {
  console.log(JSON.stringify(d));
  const result = kClosest(d.points, d.k);
  console.log('result = ', JSON.stringify(result));
  console.log('----------');
}
