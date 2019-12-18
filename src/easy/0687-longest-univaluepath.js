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
var longestUnivaluePath = function(root) {
  let max = 0;
  if (!root) return 0;
  const getMax = (root, val) => {
    if (!root) return 0;
    const left = getMax(root.left, root.val);
    const right = getMax(root.right, root.val);
    max = Math.max(max, left + right);
    if (root.val === val) return Math.max(left, right) + 1;
    return 0;
  }
  getMax(root, root.val);
  return max;
};
