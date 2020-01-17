/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  const res = []
  const traverse = root => {
    if (!root) return
    if (root.left) traverse(root.left)
    res.push(root.val)
    if (root.right) traverse(root.right)
  }
  traverse(root)
  let sum = 0
  let lf = false
  res.forEach(item => {
    if (item === L || lf) {
      lf = true
      sum += item
    }
    if (item === R) {
      lf = false
    }
  })
  return sum
}
