/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let rowNum = -1, row;
  for (let r = 0; r < matrix.length; r++) {
    row = matrix[r];
    if (target >= row[0] && target <= row[row.length - 1]) {
      rowNum = r;
      break;
    }
  }

  if (rowNum < 0) {
    return false;
  }

  let low = 0, high = row.length - 1, mid;
  while(low <= high) {
    mid = Math.floor((low + high) / 2);
    if (row[mid] === target)
      return true;
    else if (target > row[mid]) 
      low = mid + 1;
    else
      high = mid - 1;
  }

  return false;
};


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))