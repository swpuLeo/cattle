/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  else if (root.val < val) return searchBST(root.right, val);
  else return searchBST(root.left, val);
};
