/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = []
  const traverse = (root, res) => {
    if (!root) return
    traverse(root.left, res)
    res.push(root.val)
    traverse(root.right, res)
  }
  traverse(root, res)
  return res
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const res = []
  const stack = []
  let node = root
  while (node || stack.length) {
    res.unshift(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
    node = stack.pop()
  }
  return res
}
