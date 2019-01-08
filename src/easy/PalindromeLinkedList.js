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
var isPalindrome = function(head) {
  if (!head) return true;
  let slow = head, fast = head, prev = null;
  // 利用快慢指针寻找链表的中点
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 反转后半部分链表
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  // 迭代比较
  while (head && prev) {
    if (head.val !== prev.val) return false;
    head = head.next;
    prev = prev.next;
  }
  return true;
};

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
var isPalindrome = function(head) {
  if (!head) return true;
  let helper = [];
  while (head) {
    helper.push(head.val);
    head = head.next;
  }
  let left = 0, right = helper.length - 1;
  while (left < right) {
    if (helper[left++] !== helper[right--]) return false;
  }
  return true;
};
