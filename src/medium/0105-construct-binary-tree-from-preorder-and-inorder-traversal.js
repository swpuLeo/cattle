/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

// 方案一：递归

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/**
 *
 * 思路描述：
 * 前序遍历的顺序是：根 -> 左 -> 右
 * 中序遍历的顺序是：左 -> 根 -> 右
 * 给定的 preorder[0] 一定是根节点 root
 * 那么只需要找到 root 在 inorder 中的位置 idx
 * 就可以划分左右子树
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null
  const root = preorder[0]
  const rootIdx = inorder.indexOf(root)
  const midLeft = inorder.slice(0, rootIdx)
  const midRight = inorder.slice(rootIdx + 1)
  const preLeft = preorder.slice(1, rootIdx + 1)
  const preRight = preorder.slice(rootIdx + 1)
  const tree = new TreeNode(root)
  tree.left = buildTree(preLeft, midLeft)
  tree.right = buildTree(preRight, midRight)
  return tree
}
