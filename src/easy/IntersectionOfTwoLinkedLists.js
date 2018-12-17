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
  let diff = 0;
  let nodeA = headA, nodeB = headB;
  let lenA = 0, lenB = 0;
  while(nodeA) {
    lenA += 1;
    nodeA = nodeA.next;
  }
  while(nodeB) {
    lenB += 1;
    nodeB = nodeB.next;
  }
  diff = Math.abs(lenA - lenB);
  nodeA = headA;
  nodeB = headB;
  if (lenA > lenB) {
    for (let i = 0; i < diff; i++) {
      nodeA = nodeA.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      nodeB = nodeB.next;
    }
  }
  while (nodeA && nodeB && nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return nodeA;
};