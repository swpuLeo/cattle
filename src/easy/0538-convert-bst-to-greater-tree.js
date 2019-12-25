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
var convertBST = function(root) {
  let preNum = 0;
  const traverse = root => {
    if (!root) return;
    traverse(root.right);
    root.val += preNum;
    preNum = root.val;
    traverse(root.left);
  }
  traverse(root);
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
var convertBST = function(root) {
  const traverse = (root, lastValue) => {
    if (!root) return 0;
    let rightValue = traverse(root.right, lastValue);
    let cur = root.val;
    root.val += rightValue + lastValue;
    let leftValue = traverse(root.left, root.val);
    return cur + rightValue + leftValue;
  }
  traverse(root, 0);
  return root;
};
