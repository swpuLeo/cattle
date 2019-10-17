/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 存在问题，待解决
// var invertTree = function(root) {
//   if (!root) return root;
//   const queue = [root];
//   while(queue.length) {
//     const node = queue.shift();
//     const left = node.left;
//     node.left = node.right;
//     node.right = left;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.eight);
//   }
//   return root;
// };
