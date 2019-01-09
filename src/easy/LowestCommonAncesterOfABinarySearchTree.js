/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const val = root.val;
  // if ((val - p.val) * (val - q.val) <= 0) return root;
  if (p.val < val && q.val < val) return lowestCommonAncestor(root.left, p, q);
  if (p.val > val && q.val > val) return lowestCommonAncestor(root.right, p, q);
  return root;
};
