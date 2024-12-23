const chars = { "}": "{", ")": "(", "]": "[" };
var isValid = function (s) {
  if (s.length % 2 > 0) return false;
  const open = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (!chars[char]) {
      open.push(char)
    } else {
      const openChar = open.pop();
      if (openChar !== chars[char]) return false;
    }
  }

  return open.length === 0;
};

const data = [
  { s: "((", output: false },
  { s: "()", output: true },
  { s: "()[]{}", output: true },
  { s: "(]", output: false },
  { s: "([])", output: true }
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = isValid(d.s);
  console.log('result = ', result);
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}