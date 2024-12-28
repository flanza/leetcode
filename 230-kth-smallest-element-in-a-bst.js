const { TreeNode, arrayToTree, treeToString } = require('./array-to-tree.js');


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var kthSmallest = function (root, k) {
  return Math.round(Math.random())
    ? kthSmallestStack(root, k)
    : kthSmallestBfs(root, k);
}

var kthSmallestStack = function (root, k) {
  const stack = [];
  let curr = root, i = 1;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    if (i++ === k) {
      return curr.val;
    }
    curr = curr.right;
  }

  return undefined;
}


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallestBfs = function (root, k) {
  let result, i = 0;

  const dfs = node => {
    if (!node) return;

    dfs(node.left);
    if (i++ < k) {
      result = node.val;
      dfs(node.right);
    }
  }
  dfs(root);

  return result;
};

const data = [
  {
    tree: arrayToTree([3, 1, 4, null, 2]),
    k: 1,
    output: 1
  },
  {
    tree: arrayToTree([5, 3, 6, 2, 4, null, null, 1]),
    k: 3,
    output: 3
  },
];

for (let d of data) {
  const tree = d.tree;
  console.log(treeToString(tree));
  const result = kthSmallest(tree, d.k);
  console.log(`k = ${d.k}, result = ${result}, expectedResult = ${d.output}`);
  JSON.stringify(result) === JSON.stringify(d.output) ? console.log('ok') : console.error('nok')
  console.log('----------')

}