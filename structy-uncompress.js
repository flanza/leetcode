const uncompress = (s) => {
  let output = '',countIdx = 0;
  while(countIdx < s.length - 1) {
    let strCount = '';
    do {
      strCount += s[countIdx];
    } while (!Number.isNaN(Number.parseInt(s[++countIdx])));
    
    const count = Number.parseInt(strCount);
    const char = s[countIdx++];

    output += ''.padStart(count, char);
  }
  return output;
};

module.exports = {
  uncompress,
};
console.log(uncompress("2c3a1t")); // -> 'ccaaat'
