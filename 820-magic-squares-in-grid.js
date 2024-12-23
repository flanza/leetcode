/**
 * @param {number[][]} grid
 * @return {number}
 */

const MAX_ALLOWED = 9;
const MIN_ALLOWED = 1;
var numMagicSquaresInside = function (grid) {
  const isValidVertical = (r, c) => isDistinct(grid[r][c], grid[r + 1][c], grid[r + 2][c])
      && grid[r][c] >= MIN_ALLOWED && grid[r + 1][c] >= MIN_ALLOWED && grid[r + 2][c] >= MIN_ALLOWED
      && grid[r][c] <= MAX_ALLOWED && grid[r + 1][c] <= MAX_ALLOWED && grid[r + 2][c] <= MAX_ALLOWED,
    sumVertical = (r, c) => grid[r][c] + grid[r + 1][c] + grid[r + 2][c],
    isValidHorizontal = (r, c) => isDistinct(grid[r][c], grid[r][c + 1], grid[r][c + 2])
      && grid[r][c] >= MIN_ALLOWED && grid[r][c + 1] >= MIN_ALLOWED && grid[r][c + 2] >= MIN_ALLOWED
      && grid[r][c] <= MAX_ALLOWED && grid[r][c + 1] <= MAX_ALLOWED && grid[r][c + 2] <= MAX_ALLOWED,
    sumHorizontal = (r, c) => grid[r][c] + grid[r][c + 1] + grid[r][c + 2],
    isValidDiagonal = (r, c) => isDistinct(grid[r][c], grid[r + 1][c + 1], grid[r + 2][c + 2])
      && isDistinct(grid[r][c + 2], grid[r + 1][c + 1], grid[r + 2][c])

    isDistinct = (val1, val2, val3) => val1 !== val2 && val1 !== val3 && val2 !== val3;

  const isMagicSquare = (r, c) => {
    if (!isValidVertical(r, c) || !isValidVertical(r, c + 1) || !isValidVertical(r, c + 2) ||
        !isValidHorizontal(r, c) || !isValidHorizontal(r + 1, c) ||!isValidHorizontal(r + 2, c) ||
        !isValidDiagonal(r, c)
  ) return false;

    const checks = [
      sumVertical(r, c),
      sumVertical(r, c + 1),
      sumVertical(r, c + 2),
      sumHorizontal(r, c),
      sumHorizontal(r + 1, c),
      sumHorizontal(r + 2, c),
      grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2],
      grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c]
    ];

    let sum = checks[0];
    for (let i = 1; i < checks.length; i++) {
      if (checks[i] !== sum) return false;
    }

    return true;

  }

  let count = 0;
  for (let r = 0; r <= grid.length - 3; r++) {
    for (let c = 0; c <= grid[r].length - 3; c++) {
      if (isMagicSquare(r, c)) {
        count++;
      }
    }
  }
  return count;
};


const data = [
  // { input: [[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]], output: 1 },
  // { input: [[5, 5, 5], [5, 5, 5], [5, 5, 5]], output: 0 },
  // { input: [[7,0,5],[2,4,6],[3,8,1]], output: 0},
  { input: [[1,3,7,8,8],[8,3,2,7,4],[3,8,4,0,9],[8,1,6,5,0],[7,2,1,8,6]], output: 0},
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = numMagicSquaresInside(d.input);
  console.log('result = ', JSON.stringify(result));
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}