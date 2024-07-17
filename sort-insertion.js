const { testInplaceSort } = require('./sort.data.js');

function insertionSort(items) {
  for (let i = 1; i < items.length; i++) {
    for (let j = i; j > 0; j--) {
      if (items[j - 1] > items[j]) {
        [items[j - 1], items[j]] = [items[j], items[j - 1]];
      } else {
        break;
      }
    }
  }
}

testInplaceSort(insertionSort);
