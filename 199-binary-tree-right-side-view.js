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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const result = [], queue = [root];

    while(queue.length) {
      const l = queue.length;
      result.push(queue[l - 1].val);

      for(let i = 0; i < l; i++) {
        const curr = queue.shift();
        if (curr.left)
          queue.push(curr.left)
        if (curr.right)
          queue.push(curr.right);
      }

    }
    return result;
};

const data = [
  {
    root: arrayToTree([1,2,3,null,5,null,4]),
    output: [1,3,4]
  },
];

for (let d of data) {
  console.log(treeToString(d.root));
  const result = rightSideView(d.root);
  console.log(`result = ${JSON.stringify(result)}, expectedResult = ${JSON.stringify(d.output)}`);
  JSON.stringify(result) === JSON.stringify(d.output) ? console.log('ok') : console.error('nok')
  console.log('----------')

}