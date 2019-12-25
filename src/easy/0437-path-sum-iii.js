/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  const dfs = (root, sum) => {
    let res = 0;
    const func = (node, ret) => {
      if (!node) return;
      if (node.val + ret === sum) res += 1;
      func(node.left, node.val + ret);
      func(node.right, node.val + ret);
    }
    func(root, 0);
    return res;
  }
  if (!root) return 0;
  const queue = [root];
  let count = 0;
  while (queue.length) {
    const node = queue.shift();
    count += dfs(node, sum);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return count;
};
