const { TreeNode, arrayToTree, treeToString } = require('./array-to-tree.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  const dfs = node => {
    if (!node) return;

    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
  dfs(root);

  return result;
};

const data = [{
  tree: arrayToTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]),
  output: [4, 2, 6, 5, 7, 1, 3, 9, 8]
},
{
  tree: arrayToTree([1,null,2,3]),
  output: [1, 3, 2]
},
];

for (let d of data) {
  const tree = d.tree, result = inorderTraversal(tree);
  console.log(treeToString(tree));
  console.log(result);
  JSON.stringify(result) === JSON.stringify(d.output) ? console.log('ok') : console.error('nok')

}