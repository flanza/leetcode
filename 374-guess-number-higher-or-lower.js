/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n, guess) {
  let low = 1, high = n, mid;
  while(low <= high) {
      mid = Math.floor((low + high) / 2);
      const result = guess(mid);
      if (result > 0)
          low = mid + 1;
      else if (result < 0)
          high = mid - 1;
      else
          return mid;
  }
};

const guessFunc = (pick) => (num) => num > pick ? -1 : num < pick ? 1 : 0;

console.log(guessNumber(10, guessFunc(6)));
console.log(guessNumber(1, guessFunc(1)));
console.log(guessNumber(2, guessFunc(1)));

