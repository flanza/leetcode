// https://en.wikipedia.org/wiki/Levenshtein_distance

var minDistance = function (word1, word2) {
  if (!word1.length) {
    return word2.length;
  }

  const n = word2.length;

  let prevRow = Array.from({ length: n + 1}, (_,idx) => idx);
  let currRow = new Array(n + 1).fill(0);

  for (let i = 1; i <= word1.length; i++) {
    currRow[0] = i;

    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        currRow[j] = prevRow[j - 1];
      } else {
        currRow[j] = 1 + Math.min(
          currRow[j - 1],   // Insert
          prevRow[j],       // Remove
          prevRow[j - 1]    // Replace
        );
      }
    }

    prevRow = [...currRow];
  }

  return currRow[n];
};


const data = [
  { word1: "", word2: "2", output: 1 },
  { word1: "horse", word2: "ros", output: 3 },
  { word1: "intention", word2: "execution", output: 5 },
  { word1: "kitten", word2: "sitting", output: 3 },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = minDistance(d.word1, d.word2);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}
