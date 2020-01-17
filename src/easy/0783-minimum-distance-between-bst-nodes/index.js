/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  if (!root) return 0;
  const res = [];
  const traverse = root => {
    if (root.left) traverse(root.left);
    res.push(root.val);
    if (root.right) traverse(root.right);
  };
  traverse(root);
  let min = Infinity;
  for (let i = 0; i < res.length - 1; i++) {
    min = Math.min(min, res[i + 1] - res[i]);
  }
  return min;
};
