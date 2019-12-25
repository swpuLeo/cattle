/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = [];
  const prev = root => {
    if (!root) return;
    res.push(root.val);
    for(let i = 0; root.children && i < root.children.length; i++){
      prev(root.children[i]);
    }
  }
  prev(root);
  return res;
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return [];
  const res = [];
  const stack = [];
  stack.push(root);
  while(stack.length) {
    const node = stack.pop();
    res.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return res;
};
