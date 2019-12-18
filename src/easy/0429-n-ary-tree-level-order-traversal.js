/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length) {
    const row = [];
    let count = queue.length;
    while (count) {
      const node = queue.shift();
      for (let child of node.children) {
        queue.push(child);
      }
      row.push(node.val);
      count -= 1;
    }
    res.push(row);
  }
  return res;
};
