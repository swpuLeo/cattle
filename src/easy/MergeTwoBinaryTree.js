/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  const root = new TreeNode((!t1 ? 0 : t1.val) + (!t2 ? 0 : t2.val));
  root.left = mergeTrees(!t1 ? null : t1.left, !t2 ? null : t2.left);
  root.right = mergeTrees(!t1 ? null : t1.right, !t2 ? null : t2.right);
  return root;
};
