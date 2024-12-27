function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function arrayToTree(nums) {
  if (nums.length === 0) {
    return null;
  }
  let root = new TreeNode(nums[0]);
  let q = [root];
  let i = 1;
  while (i < nums.length) {
    let curr = q.shift();
    if (i < nums.length) {
      const val = nums[i++];
      if (val) {
        curr.left = new TreeNode(val);
      }
      q.push(curr.left);
    }
    if (i < nums.length) {
      const val = nums[i++];
      if (val) {
        curr.right = new TreeNode(val);
      }
      q.push(curr.right);
    }
  }
  return root;
}

function findMin(root) {
  let min = root;
  while (min.left) min = min.left;
  return min.val;
}

function findMax(root) {
  let max = root;
  while (max.right) max = max.right;
  return max.val;
}

function deleteNode(root, key) {
  if (!root) {
    return null;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.right) {
      return root.left;
    } else if (!root.left) {
      return root.right;
    }
    const min = findMin(root.right);
    root.val = min;
    root.right = deleteNode(root.right, min);
  }

  return root;
}

// const root = arrayToTree([5, 3, 6, 2, 4, null, 7]);
const root = new TreeNode(4);
root.left = new TreeNode(3, new TreeNode(2));
root.right = new TreeNode(6, new TreeNode(5), new TreeNode(7));


console.log(JSON.stringify(root, (_, value) => value ?? undefined, 2));
console.log(JSON.stringify(deleteNode(root, 4), (_, value) => value ?? undefined, 2));
process.exit(0)