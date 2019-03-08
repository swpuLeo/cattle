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
var findTilt = function(root) {
  let num = 0;
  const postOrder = root => {
    if (!root) return 0;
    let left = postOrder(root.left);
    let right = postOrder(root.right);
    num += Math.abs(left - right);
    return root.val + left + right;
  }
  postOrder(root);
  return num;
};