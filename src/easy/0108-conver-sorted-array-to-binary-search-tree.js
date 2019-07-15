/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var len = nums.length;
  if (len === 0) return null;
  return genTree(nums, 0, len - 1);
};


function genTree(nums, start, end) {
  if (start > end) return null;
  var mid = Math.floor((start + end) / 2);
  var node = new TreeNode(nums[mid]);
  node.left = genTree(nums, start, mid - 1);
  node.right = genTree(nums, mid + 1, end);
  return node;
}