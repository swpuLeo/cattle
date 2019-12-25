/**
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 */

// 方案一：后序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const traverse = root => {
    if (!root) return
    traverse(root.left)
    traverse(root.right)
    if (root.left) {
      let pre = root.left
      while (pre.right) pre = pre.right
      pre.right = root.right
      root.right = root.left
      root.left = null
    }
    root = root.right
  }
  traverse(root)
}
