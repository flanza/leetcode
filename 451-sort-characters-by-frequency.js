var frequencySort = function(s) {
    const result = Object.entries(
      s.split('')
      .reduce((acc, c) => ({...acc, [c]: (acc[c] ?? 0) + 1}), {})
    ).sort((a,b) => b[1] - a[1])
    .map(e => e[0].repeat(e[1]))
    .join('');

  return result;

};

console.log(frequencySort("cccaaa"))