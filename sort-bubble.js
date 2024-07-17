const { testInplaceSort } = require('./sort.data.js');

function bubbleSort(items) {
  const len = items.length;
  let swapped = true;
  for(let i=0; i < len;i++) {
    for(let j=0; j < len - i - 1;j++) {
      const curr = items[j];
      const next = items[j + 1];

      if (next < curr) {
        items[j + 1] = curr;
        items[j] = next;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
}

testInplaceSort(bubbleSort);
