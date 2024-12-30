/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [], combination = [];

    const dfs = (i) => {
      if (target < 0 || i >= candidates.length) return;

      if (target == 0) {
        result.push([...combination]);
        return;
      }

      const num = candidates[i];

      combination.push(num);
      target -= num;
      dfs(i);

      combination.pop();
      target += num;
      dfs(i + 1);
    }
    dfs(0);

    return result;
};


const data = [
  {
    candidates: [2,3,6,7], 
    target: 7,
    output: [[2,2,3],[7]]
  },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = combinationSum(d.candidates, d.target);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}