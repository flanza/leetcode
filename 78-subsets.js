/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let output = [];
  let subset = [];

  const dfs = (i) => {
    if (i >= nums.length) {
      output.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  };

  dfs(0);
  return output;
};

const data = [
  { input: [1,2,3], output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]}
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = subsets(d.input);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}