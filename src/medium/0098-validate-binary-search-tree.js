/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true
  return valid(root, -Number.MAX_VALUE, Number.MAX_VALUE)
};

var valid = function(root, min, max) {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  return valid(root.left, min, root.val) && valid(root.right, root.val, max)
}
