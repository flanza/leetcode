/**
 * 
 * There should be at least one heater at every half the distance between the most dinstant houses.
 * If that's not possible, than the nearest heater of the half distance should have a radius large enough to reach both houses.
 * 
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  heaters.sort((a,b) => a-b);
  let maxDistance = houses.reduce((d, house) => {
    const result = findHeater(heaters, house);
    return Math.max(d, result);
  }, 0);

    return maxDistance;
};

function findHeater(heaters, house) {
  let low = 0, high = heaters.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (heaters[mid] <= house && house <= heaters[mid + 1]) {
      return Math.min(house - heaters[mid], heaters[mid + 1] - house);
    } else if (heaters[mid] >= house) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (low === 0) return heaters[0] - house;
  if (low === heaters.length) return house - heaters[heaters.length - 1];
}

const data = [
  {houses: [1, 2, 3], heaters: [1], expected: 2},
  {houses: [1, 2, 3], heaters: [1, 2, 3], expected: 0},
  {houses: [1,5], heaters: [2], expected: 3},
  {houses: [1,2,3], heaters: [2], expected: 1},
  {houses: [1,2,3,4], heaters: [1,4], expected: 1},
];

for(let i=0; i< data.length; i++) {
  const d = data[i];
  const result = findRadius(d.houses, d.heaters);
  console.log('houses  = ', JSON.stringify(d.houses));
  console.log('heaters = ', JSON.stringify(d.heaters));
  console.log('result = ', result);
  console.log('expected = ', d.expected);
  console.log('----------------');
  // break;
}