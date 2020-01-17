/**
 * https://leetcode-cn.com/problems/sort-list/
 * https://leetcode.com/problems/sort-list/
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
var sortList = function(head) {
  if (!head || !head.next) return head
  let fast = head.next
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  const mid = slow.next
  slow.next = null
  let left = sortList(head)
  let right = sortList(mid)
  let start = new ListNode(0)
  const ans = start
  while (left && right) {
    if (left.val < right.val) {
      start.next = left
      left = left.next
    } else {
      start.next = right
      right = right.next
    }
    start = start.next
  }
  start.next = left ? left : right
  return ans.next
}
