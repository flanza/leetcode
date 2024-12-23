var reverseBits = function(n) {
  console.log(n.toString(2))
  let res = 0;
  for(let i = 0; i < 32; i++) {
    const bit = (n >> i) & 1;
    
    console.log(i.toString().padStart(2, '0'), ' = ', bit.toString(2), `${bit & 1}`);
    console.log('bit = ', bit);
    res |= (bit << (31 - i)) >>> 0;
    console.log('res = ', res.toString(2).padStart(32, '0'));
  }

  return res >>> 0;
};

const data = [
  {n: 43261596, output: 964176192 },
  {n: 4294967293, output: 3221225471},
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = reverseBits(d.n);
  console.log('result = ', JSON.stringify(result));
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}
