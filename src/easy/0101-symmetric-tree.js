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
var isSymmetric = function(root) {
  var isSymmetricSubTree = function(nodeLeft, nodeRight) {
    if (!nodeLeft && !nodeRight) return true;
    if (!nodeLeft || !nodeRight) return false;
    if (nodeLeft.val !== nodeRight.val) return false;
    return (nodeLeft.val === nodeRight.val)
      && isSymmetricSubTree(nodeLeft.right, nodeRight.left)
      && isSymmetricSubTree(nodeLeft.left, nodeRight.right);
  };
  return isSymmetricSubTree(root, root);
};