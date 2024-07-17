const { testInplaceSort } = require("./sort.data");

function heapSort(items, sortIdx=items.length - 1) {
  if (!items?.length || sortIdx == 0) {
    return;
  }

  heapify(items, sortIdx);
  [items[0], items[sortIdx]] = [items[sortIdx], items[0]];
  heapSort(items, sortIdx - 1);
}

function heapify(items, high) {
  for(let i = high; i >= 0; i--) {
    const parent = Math.floor((i-1)/2);
    if (items[parent] < items[i]) {
      [items[parent], items[i]] = [items[i], items[parent]];
    }
  }
}

testInplaceSort(heapSort);