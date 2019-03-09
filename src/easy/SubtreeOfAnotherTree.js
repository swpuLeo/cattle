/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (!s) return false;
  const isIdentical = (s, t) => {
    if (s && t) {
      return s.val === t.val && isIdentical(s.left, t.left) && isIdentical(s.right, t.right);
    } else if (!s && !t) return true;
    else return false;
  };
  return isIdentical(s, t) || isIdentical(s.left, t) || isIdentical(s.right, t);
};

console.log(isSubtree([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2],[1,null,1,null,1,null,1,null,1,null,1,2]));