/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  if (!root) return [];
  const map = {};
  const traverse = root => {
    if (root) {
      if (!map[root.val]) {
        map[root.val] = 1;
      } else {
        map[root.val] += 1;
      }
    }
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  }
  traverse(root);
  let max = -Infinity;
  const res = [];
  for (let key in map) {
    max = max > map[key] ? max : map[key];
  }
  for (let key in map) {
    if (map[key] === max) res.push(key);
  }
  return res;
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
 * @return {number[]}
 */
var findMode = function(root) {
  let res = [];
  let cur;
  let count = 0;
  let max = -Infinity;
  // 中序遍历
  const traverse = root => {
    if (!root) return;
    traverse(root.left);
    if (cur === undefined){
      cur = root.val;
      count = 1;
    } else {
      if (cur === root.val) {
        count += 1;
      } else {
        if (count > max) {
          max = count;
          res = [cur];
        } else if (count === max) {
          res.push(cur);
        }
        cur = root.val;
        count = 1;
      }
    }
    traverse(root.right);
  };
  traverse(root);
  if (cur !== undefined) {
    if (count > max) {
      max = count;
      res = [cur];
    } else if (count === max) {
      res.push(cur);
    }
  }
  return res;
};
