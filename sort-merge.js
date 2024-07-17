const { testSort } = require('./sort.data.js');

function mergeSort(input) {
  const items = [...input];
  if (items.length <= 1) {
    return items;
  }

  const mid = Math.floor(items.length / 2);
  const arr1 = mergeSort(items.slice(0, mid));
  const arr2 = mergeSort(items.slice(mid));

  const result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while(j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

testSort(mergeSort);