const GREATER = 0, SMALLER = 1;
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  if (arr.length === 2 && arr[0] === arr[1]) return 1;
  if (arr.length <= 2) return arr.length;

  let flip = arr[0] > arr[1] ? GREATER : SMALLER, maxSize = currSize = arr[0] === arr[1] ? 1 : 2;
  for (let i = 1; i < arr.length - 1; i++) {
    const curr = arr[i], next = arr[i + 1];
    if ((flip === GREATER && next > curr) || (flip === SMALLER && next < curr)) {
      currSize++;
      flip = flip === GREATER ? SMALLER : GREATER;
    } else {
      currSize = curr === next ? 1 : 2;
      flip = curr > next ? GREATER : SMALLER
    }
    maxSize = Math.max(maxSize, currSize);
  }

  return maxSize;

};

// console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]));
// console.log(maxTurbulenceSize([4, 8, 12, 16]));
// console.log(maxTurbulenceSize([0,1,1,0,1,0,1,1,0,0]));
console.log(maxTurbulenceSize([100,100,100]));
