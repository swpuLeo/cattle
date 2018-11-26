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
var mergeTwoLists = function(l1, l2) {
  var head = new ListNode(-Infinity);
  var cur = head;
  var p1 = l1, p2 = l2;
  while(p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      cur.next = new ListNode(p1.val);
      cur= cur.next;
      p1 = p1.next;
    } else if (p1.val > p2.val) {
      cur.next = new ListNode(p2.val);
      cur = cur.next;
      p2 = p2.next;
    } else {
      cur.next = new ListNode(p1.val);
      cur = cur.next;
      p1 = p1.next;
      cur.next = new ListNode(p2.val);
      cur = cur.next;
      p2 = p2.next;
    }
  }
  if (p1 !== null) {
    cur.next = p1;
  }
  if (p2 !== null) {
    cur.next = p2;
  }
  return head.next;
};