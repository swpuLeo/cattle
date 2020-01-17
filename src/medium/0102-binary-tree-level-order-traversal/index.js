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
var levelOrder = function(root) {
  if (!root) return []

  let result = []
  let queue = [root]
  let tmp = []
  let curLvlCount = 1
  let nextLvlCount = 0

  while(queue.length) {
    let node = queue.shift()
    tmp.push(node.val)
    curLvlCount -= 1

    if (node.left) {
      queue.push(node.left)
      nextLvlCount += 1
    }

    if (node.right) {
      queue.push(node.right)
      nextLvlCount += 1
    }

    if (curLvlCount === 0) {
      result.push(tmp)
      curLvlCount = nextLvlCount
      nextLvlCount = 0
      tmp = []
    }
  }

  return result
};
