const { arrayToTree, treeToString } = require('./array-to-tree.js');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [], queue = [root];

  while (queue.length) {
    const levelResult = [];

    const l = queue.length
    for(let i = 0; i < l; i++) {
      let curr = queue.shift();
      levelResult.push(curr.val);
      if (curr.left)
        queue.push(curr.left);
      if (curr.right)
        queue.push(curr.right);
    }

    result.push(levelResult)
  }

  return result;
};

const data = [
  {
    root: arrayToTree([3, 9, 20, null, null, 15, 7]),
    output: [[3], [9, 20], [15, 7]]
  },
];

for (let d of data) {
  const result = levelOrder(d.root);
  console.log(`result = ${JSON.stringify(result)}, expectedResult = ${JSON.stringify(d.output)}`);
  JSON.stringify(result) === JSON.stringify(d.output) ? console.log('ok') : console.error('nok')
  console.log('----------')

}