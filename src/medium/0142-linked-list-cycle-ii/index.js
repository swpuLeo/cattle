/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head
  let slow = head
  let hasCycle = false
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      hasCycle = true
      break
    }
  }
  if (hasCycle) {
    let node = head
    while (slow !== node) {
      slow = slow.next
      node = node.next
    }
    return node
  } else {
    return null
  }
}
