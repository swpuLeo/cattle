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
var postorder = function(root) {
  const res = [];
  const post = root => {
    if (!root) return;
    for (let i = 0; root.children && i < root.children.length; i++) {
      post(root.children[i]);
    }
    res.push(root.val);
  };
  post(root);
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
var postorder = function(root) {
  if (!root) return [];
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }
  return res.reverse();
};
