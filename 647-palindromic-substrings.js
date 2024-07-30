var countSubstrings = function(s) {
  const countPalindromes = (i, j) => { 
    let count = 0, left = i, right = j;
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      count++;
    }

    return count;
  }

  return s.split('').reduce((acc, _, i) => acc + countPalindromes(i, i) + countPalindromes(i, i + 1), 0);
};

const data = [
  { s: "racecar", output: 10 },
  { s: "abc", output: 3 },
  { s: "aaa", output: 6 }
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = countSubstrings(d.s);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}