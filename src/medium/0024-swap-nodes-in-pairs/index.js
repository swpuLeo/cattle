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
var swapPairs = function(head) {
  let pre = new ListNode(null);
  pre.next = head;
  let temp = pre;
  while (temp.next && temp.next.next) {
    let cur = temp.next;
    let next = temp.next.next;
    temp.next = next;
    cur.next = next.next;
    next.next = cur;
    temp = cur;
  }
  return pre.next;
};
