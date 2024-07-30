var isAnagram = function(s, t) {
  if (t.length !== s.length) return false;

  const arr = t.split('');

  for(let i = 0; i < s.length; i++) {
    const idx = arr.indexOf(s[i]);
    if (idx < 0) {
      return false;
    }
    arr.splice(idx, 1);
  }

  return true;   
};

const data = [
  { s: "anagram", t: "nagaram", output: true },
  { s: "rat", t: "car", output: false },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = isAnagram(d.s, d.t);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}