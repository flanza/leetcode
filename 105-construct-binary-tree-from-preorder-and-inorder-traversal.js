const { TreeNode, arrayToTree, treeToString } = require('./array-to-tree.js');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = (preorder, inorder) => {
  if (!preorder.length) return null;

  const root = new TreeNode(preorder[0]),
        rootPos = inorder.findIndex(i => i === preorder[0]);

  root.left = buildTree(preorder.slice(1, rootPos + 1), inorder.slice(0, rootPos));
  root.right = buildTree(preorder.slice(rootPos + 1), inorder.slice(rootPos + 1));
 
  return root;
};

const data = [
  {
    preorder: [3,9,20,15,7],
    inorder: [9,3,15,20,7],
    output: arrayToTree([3,9,20,null,null,15,7])
  },
];

for (let d of data) {
  const result = buildTree(d.preorder, d.inorder);
  console.log(`k = ${d.k}, result = ${result}, expectedResult = ${JSON.stringify(d.output)}`);
  JSON.stringify(result) === JSON.stringify(d.output) ? console.log('ok') : console.error('nok')
  console.log(treeToString(result))
  console.log('----------')

}