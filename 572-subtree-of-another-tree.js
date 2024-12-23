function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (p?.val !== q?.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSubtree = function (root, subRoot) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node.val === subRoot.val && isSameTree(node, subRoot)) {
      return true;
    }
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }

  return false;
};

const tree1 = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
const tree2 = new TreeNode(4, new TreeNode(1), new TreeNode(2));


console.log(isSubtree(tree1, tree2));