# 0021 合并两个有序链表


## 题目导航

难度：[简单](/solution/easy/)

分类：[链表](/art/linked-list.html)

来源：[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)  [力扣](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0021-merge-two-sorted-lists.js)






## 题目描述

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。


示例 1:

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
:::



## 解题思路


思路一

```js
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
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
