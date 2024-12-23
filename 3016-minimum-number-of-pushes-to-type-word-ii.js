const SLOTS = 8;
var minimumPushes = function (word) {
  const chars = word.split('');
  const charMap = chars.reduce((acc, item) => {
    acc[item] = 1 + (acc[item] ?? 0);
    return acc;
  }, {});

  const count = Object.entries(charMap)
    .reduce((acc, [char, charCount]) => {
      if (acc[charCount] === undefined) acc[charCount] = [];
      acc[charCount].push(char);
      return acc;
    }, []);


  const keyMap = {};
  let slotsAvailable = SLOTS, pushesRequired = 1;
  for (let i = count.length; i >= 1; i--) {
    const items = count[i];
    if (!items) continue;


    do {
      const usedSlots = (items.length <= slotsAvailable) ? items.length : slotsAvailable;
      slotsAvailable -= usedSlots;
      items.splice(0, usedSlots).forEach(j => (keyMap[j] = pushesRequired));

      if (slotsAvailable === 0) {
        pushesRequired++;
        slotsAvailable = SLOTS;
      }
    } while (items.length > 0);
  }

  return Object.entries(charMap).reduce((acc, [char,count]) => {
    return acc + (count * keyMap[char])
  }, 0);

};

const data = [
  // { word: 'abcde', output: 5 },
  // { word: 'xyzxyzxyzxyz', output: 12 },
  // { word: 'aabbccddeeffgghhiiiiii', output: 24 },
  // { word: 'axltaiwutdykakybdctmgzriejugumjumklfmryvtozdfjbvvo', output: 79},
  { word: "bphprdfcgeqjtyrbfppjgpahwuvcnnststvbewelwkdkxiraeo", output: 84 }
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = minimumPushes(d.word);
  console.log('result = ', JSON.stringify(result));
  (result === d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}
