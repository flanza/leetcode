const { arrayToTree, treeToString } = require('./array-to-tree.js');

var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  
  targetSum -= root.val;

  if (targetSum === 0 && !root.left && !root.right) return true;
  if (hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)) return true;

  targetSum += root.val;
  return false;
};


const data = [
  {
    root: arrayToTree([1,2]),
    targetSum: 1,
    output: false
  },
  {
    root: arrayToTree([-2,null,-3]),
    targetSum: -5,
    output: true
  },
];

for (let d of data) {
  console.log(treeToString(d.root));
  const result = hasPathSum(d.root, d.targetSum);
  console.log(`targetSum = ${d.targetSum}, result = ${JSON.stringify(result)}, expectedResult = ${JSON.stringify(d.output)}`);
  JSON.stringify(result) === JSON.stringify(d.output) ? console.log('ok') : console.error('nok');
  console.log('----------');
}