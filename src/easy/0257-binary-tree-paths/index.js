/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = [];
  if (!root) return res;
  function paths(node, res, path) {
    let tmp = '';
    if (!node.left && !node.right) res.push(path);
    if (node.left) {
      tmp = path + '->' + node.left.val;
      paths(node.left, res, tmp);
    }
    if (node.right) {
      tmp = path + '->' + node.right.val;
      paths(node.right, res, tmp);
    }
  }
  paths(root, res, root.val + '');
  return res;
};