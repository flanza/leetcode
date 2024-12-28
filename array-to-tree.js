function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function visualizeTree(root) {
  if (!root) return '';
  
  const levels = [];
  const queue = [[root, 0, 16]];
  const positions = new Map();
  
  while (queue.length) {
    const [node, level, pos] = queue.shift();
    
    if (!levels[level]) levels[level] = new Map();
    levels[level].set(pos, node.val);
    positions.set(node, pos);
    
    if (node.left) queue.push([node.left, level + 1, pos - (8 >> level)]);
    if (node.right) queue.push([node.right, level + 1, pos + (8 >> level) + 3]);
  }
  
  let result = '';
  for (let i = 0; i < levels.length; i++) {
    let line = '';
    let connections = '';
    const level = Array.from(levels[i].entries()).sort((a, b) => a[0] - b[0]);
    
    for (let [pos, val] of level) {
      line = line.padEnd(pos, ' ') + val;
    }
    
    if (i < levels.length - 1) {
      for (let [pos, val] of level) {
        const node = Array.from(positions.entries()).find(([n, p]) => p === pos)[0];
        if (node.left) {
          const leftPos = positions.get(node.left);
          connections = connections.padEnd(leftPos, ' ') + '/';
        }
        if (node.right) {
          const rightPos = positions.get(node.right);
          connections = connections.padEnd(rightPos, ' ') + '\\';
        }
      }
      result += line + '\n' + connections + '\n';
    } else {
      result += line;
    }
  }
  
  return result;
}

function arrayToTree(arr) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]); // Create the root node
  const queue = [root]; // Use a queue to track nodes for assigning children
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
      const current = queue.shift();

      // Assign the left child if not null
      if (arr[i] !== null) {
          current.left = new TreeNode(arr[i]);
          queue.push(current.left);
      }
      i++;

      // Assign the right child if not null
      if (i < arr.length && arr[i] !== null) {
          current.right = new TreeNode(arr[i]);
          queue.push(current.right);
      }
      i++;
  }

  return root; // Return the root of the tree
}

function treeToString(tree) {
  return JSON.stringify(tree, (_,val) => val ?? undefined, 2);
}

exports.TreeNode = TreeNode;
exports.arrayToTree = arrayToTree;
exports.treeToString = visualizeTree;