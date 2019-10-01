# 0141 删除排序链表中的重复元素


## 题目导航

难度：[简单](/solution/easy/)

分类：[链表](/art/linked-list.html)

来源：[LeetCode](https://leetcode.com/problems/linked-list-cycle/)  [力扣](https://leetcode-cn.com/problems/linked-list-cycle/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0141-linked-list-cycle.js)






## 题目描述

给定一个链表，判断链表中是否有环。为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。


示例 1:

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

![0141-1](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/illustration/0141-1.png)

示例 2:

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

![0141-2](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/illustration/0141-2.png)

示例 3:

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

![0141-3](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/illustration/0141-3.png)


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/linked-list-cycle
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
