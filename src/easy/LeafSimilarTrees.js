/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const traverse = (root, res) => {
    if (!root) return res;
    if (root.left) traverse(root.left, res);
    if (root.right) traverse(root.right, res);
    if (!root.left && !root.right) res.push(root.val);
    return res;
  }
  const arr1 = traverse(root1, []);
  const arr2 = traverse(root2, []);
  return arr1.join('') === arr2.join('');
};
