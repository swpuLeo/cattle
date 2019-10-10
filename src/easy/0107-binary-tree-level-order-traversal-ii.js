/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  var cur = null;
  var last = root;
  var queue = [root];
  var tmp = [];
  var res = [];
  while(queue.length) {
    var node = queue.shift();
    cur = node;
    tmp.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    if (cur === last) {
      last = queue[queue.length - 1];
      res.unshift(tmp);
      tmp = [];
    }
  }
  return res;
};
