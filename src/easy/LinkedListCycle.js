/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 优化方案，使用快慢指针将空间复杂度降为常数级。
var hasCycle = function(head) {
  if (!head) return false;
  let slow = head, fast = head.next;
  while (fast && fast.next && slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow === fast;
};


/**
 * 基本思路：使用 Hash
 * 
 * 在 JS 中使用 Map 结构
 */
/**
var hasCycle = function(head) {
  const visited = new Map();
  while (head) {
    if (visited.has(head)) return true;
    visited.set(head, true);
    head = head.next;
  }
  return false;
};
**/