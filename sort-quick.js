const { testInplaceSort, data } = require('./sort.data.js');

function quickSort(items, low = 0, high = items.length -1) {
  if (low >= high) {
    return;
  }

  const pivotIdx = partition(items, low, high);
  quickSort(items, low, pivotIdx - 1);
  quickSort(items, pivotIdx + 1, high);
}

function findPivot(items, firstIdx, lastIdx) {
  const midIdx = firstIdx + Math.round((lastIdx - firstIdx) / 2);
  const first = items[firstIdx], mid = items[midIdx], last = items[lastIdx];

  if ((first > mid && first < last) || (first > last && first < mid)) {
    return firstIdx;
  }

  if ((mid > first && mid < last) || (mid > last && mid < first)) {
    return midIdx;
  }

  return lastIdx;
}

function partition(items, low, high) {
  if (items.length === 0) {
    return -1;
  } else if (items.length === 1) {
    return 0;
  }

  const pivotIdx = findPivot(items, low, high);
  const pivot = items[pivotIdx];

  [items[pivotIdx], items[high]] = [items[high], items[pivotIdx]];

  let pivotPosition = low;
  for(let j = low; j < high; j++) {
    if (items[j] < pivot) {
      [items[j], items[pivotPosition]] = [items[pivotPosition], items[j]];
      pivotPosition++;
    }
  }

  [items[pivotPosition], items[high]] = [items[high], items[pivotPosition]];

  return pivotPosition;
}

testInplaceSort(quickSort);
