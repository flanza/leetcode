var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    count += 1;
    n &= n - 1;
  }
  return count;
};

const data = [
  { n: 15, output: 4 },
  { n: 128, output: 1 },
  { n: 2147483645, output: 30 }
]

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = hammingWeight(d.n);
  console.log('result = ', JSON.stringify(result));
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}
