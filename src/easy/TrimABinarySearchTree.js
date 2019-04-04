/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return null;
  else {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    if (root.val < L) return root.right;
    if (root.val > R) return root.left;
  }
  return root;
};
