/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const orderArr = [];
  const traverse = root => {
    if (!root) return false;
    if (orderArr.includes(k - root.val)) return true;
    else orderArr.push(root.val);
    return traverse(root.left, orderArr, k) || traverse(root.right, orderArr, k);
  }
  return traverse(root, orderArr, k);
};
