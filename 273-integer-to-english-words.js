const numbers = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const ten2Twenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tenths = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const classes = ["Hundred", "Thousand", "Million", "Billion"];

const format = (block, clss) => {
  while(block[0] === 0) {
    block.shift()
  }
  let result = '';
  if (!block.length) return result;
  if (block.every(n => n === 0)) return result;
  if (block.length === 3) {
    result = numbers[block[0]] + ' Hundred ';
  }
  if (block.length >= 2 && block[block.length - 2] === 1) {
    result += ten2Twenty[block[block.length - 1]] + ' ';
  } else if (block.length >= 2) {
    result += tenths[block[block.length - 2]] + ' ' + numbers[block[block.length - 1]] + ' ';
  }

  if (block.length === 1) {
    result += numbers[block[0]] + ' ';
  }
  result += clss > 0 ? classes[clss] :  '';

  return result.trimEnd();
}

var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }

  const blocks = num
    .toString()
    .split('')
    .reverse()
    .reduce((acc, n) => {
      if (!acc[acc.length - 1]) acc.push([]);
      let group = acc[acc.length - 1];
      if (group.length < 3) {
        group.unshift(Number.parseInt(n));
      } else {
        group = [Number.parseInt(n)];
        acc.push(group);
      }
      return acc;
    }, []);

    let result = '';
    for(let i = blocks.length - 1; i >= 0; i--) {
      const block = blocks[i];
      result += format(block, i) + ' ';
    }

    return result.trimEnd().replace(/ +/g, ' ');
};

const data = [
  // {num: 1234567, output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"},
  // { num: 101, output: 'One Hundred One'},
  { num: 1000, output:"One Thousand"}
]



for (let d of data) {
  console.log(JSON.stringify(d));
  const result = numberToWords(d.num);
  console.log('result = ', JSON.stringify(result));
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}