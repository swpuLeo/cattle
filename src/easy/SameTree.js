/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  var isSameNode = function(pNode, qNode) {
    if (pNode === null && qNode === null) return true;
    if (pNode === null || qNode === null) return false;
    if (pNode.val !== qNode.val) return false;
    return isSameNode(pNode.left, qNode.left) && isSameNode(pNode.right, qNode.right);
  }
  return isSameNode(p, q);
};