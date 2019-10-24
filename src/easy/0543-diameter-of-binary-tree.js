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
var diameterOfBinaryTree = function(root) {
  let d = 0;
  const traverse = root => {
    if (!root) return 0;
    const left = traverse(root.left);
    const right = traverse(root.right);
    d = Math.max(left + right, d);
    return Math.max(left, right) + 1;
    
  }
  traverse(root);
  return d;
};