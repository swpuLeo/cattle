/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let listA = headA, listB = headB;
  while(listA !== listB) {
    listA = (listA == null ? headB : listA.next);
    listB = (listB == null ? headA : listB.next);
  }
  return listA;
};
