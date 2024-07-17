const { testInplaceSort } = require('./sort.data.js');

function selectionSort(items) {
  const len = items.length;
  for(let i = 0; i < len; i++) {
    let minIdx = i;
    for(let j = i + 1; j < len; j++) {
      if (items[j] <= items[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      const curr = items[i];
      const next = items[minIdx];
      items[minIdx] = curr;
      items[i] = next;
    }
  }
}

testInplaceSort(selectionSort);
