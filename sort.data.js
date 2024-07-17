const data = [
  { "input": [10, 7, 8, 9, 1, 5], "expectedOutput": [1, 5, 7, 8, 9, 10] },
  { "input": [2, 0, 5, 3, 8, 7, 6, 1], "expectedOutput": [0, 1, 2, 3, 5, 6, 7, 8] },
  { "input": [38, 27, 43, 3, 9, 82, 10], "expectedOutput": [3, 9, 10, 27, 38, 43, 82] },
  { "input": [5, 2, 9, 1, 5, 6], "expectedOutput": [1, 2, 5, 5, 6, 9] },
  { "input": [29, 10, 14, 37, 14], "expectedOutput": [10, 14, 14, 29, 37] },
  { "input": [5, 3, 8, 3, 5, 2, 8, 1, 7], "expectedOutput": [1, 2, 3, 3, 5, 5, 7, 8, 8] },
  { "input": [1, 2, 3, 4, 5, 6, 7, 8, 9], "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { "input": [9, 8, 7, 6, 5, 4, 3, 2, 1], "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { "input": [-3, -1, -4, -1, -5, -9, -2, -6, -5], "expectedOutput": [-9, -6, -5, -5, -4, -3, -2, -1, -1] },
  { "input": [3, -1, 4, -1, 5, -9, 2, 6, -5], "expectedOutput": [-9, -5, -1, -1, 2, 3, 4, 5, 6] },
  { "input": [42], "expectedOutput": [42] },
  { "input": [], "expectedOutput": [] },
  { "input": [5, 3, 8, 3, 5, 2, 8, 1, 7, 3, 6, 8, 5, 2, 1, 4, 7, 0, 9, 6, 3, 2, 8, 4, 5, 1, 0, 2, 9, 4], "expectedOutput": [0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9] },
  { "input": [3.1, 2.4, 1.5, 2.1, 3.3, 2.9], "expectedOutput": [1.5, 2.1, 2.4, 2.9, 3.1, 3.3] }
];

const testInplaceSort = (func) => {
  for(let i = 0; i < data.length; i++) {
    console.log("input  = ", data[i].input);
    func(data[i].input);
    console.log("sorted = ", data[i].input);
    console.log("epxect = ", data[i].expectedOutput);
    console.log("succes = ", isValid(data[i].input, data[i].expectedOutput));
    console.log('-----------------------');
    // break;
  }
}

exports.testSort = (func) => {
  for(let i = 0; i < data.length; i++) {
    console.log("input  = ", data[i].input);
    const sorted = func(data[i].input);
    console.log("sorted = ", sorted);
    console.log("epxect = ", data[i].expectedOutput);
    console.log("succes = ", isValid(sorted, data[i].expectedOutput));
    console.log('-----------------------');
    // break;
  }

};

const isValid = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

exports.data = data;
exports.testInplaceSort = testInplaceSort;