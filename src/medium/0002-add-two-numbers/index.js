/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const res = new ListNode(null)
  let node = res
  let p = l1,
    q = l2
  let carry = 0
  while (p || q) {
    const m = p ? p.val : 0
    const n = q ? q.val : 0
    let cur = m + n + carry
    carry = Math.floor(cur / 10)
    node.next = new ListNode(cur % 10)
    node = node.next
    if (p) p = p.next
    if (q) q = q.next
  }
  if (carry) node.next = new ListNode(carry)
  return res.next
}
