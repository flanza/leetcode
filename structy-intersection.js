const intersection = (a, b) => {
  const result = [];
  const set = new Set(b);

  for (let i of a) {
    if (set.has(i))
      result.push(i);
  }

  return result;
};

module.exports = {
  intersection,
};


console.log(intersection([4,2,1,6], [3,6,9,2,10])); // -> [2,6]
