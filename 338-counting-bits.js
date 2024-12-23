var countBits = function (n) {
  let ans = [0];

  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (i == offset * 2) {
      offset = i;
    }

    ans[i] = 1 + ans[i - offset];
  }
  return ans;
};


const data = [
  { n: 2, output: [0, 1, 1] },
  { n: 5, output: [0, 1, 1, 2, 1, 2] },
  { n: 15, output: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4] }
]

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = countBits(d.n);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}
