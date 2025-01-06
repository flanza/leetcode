/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const charCount = {};
  const findMostFrequentCharCount = () => Object.values(charCount).reduce((acc, i) => Math.max(acc, i), 0);

  let result = 0, l = 0;
  for (let r = 0; r < s.length; r++) {
    charCount[s[r]] = (charCount[s[r]] ?? 0) + 1;

    let windowSize = r - l + 1;

    while (windowSize - findMostFrequentCharCount() > k) {
      charCount[s[l]]--;
      l++;

      windowSize = r - l + 1;
    }

    result = Math.max(windowSize, result);
  }

  return result;
};

// console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
