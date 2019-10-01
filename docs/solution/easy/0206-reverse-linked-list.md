# 0206 删除排序链表中的重复元素


## 题目导航

难度：[简单](/solution/easy/)

分类：[链表](/art/linked-list.html)

来源：[LeetCode](https://leetcode.com/problems/reverse-linked-list/)  [力扣](https://leetcode-cn.com/problems/reverse-linked-list/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0206-reverse-linked-list.js)






## 题目描述

反转一个单链表。


示例 1:

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/reverse-linked-list
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null;
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const res = new ListNode(arr.pop());
  let tmp = res;
  while (arr.length) {
    tmp.next = new ListNode(arr.pop());
    tmp = tmp.next;
  }
  return res;
};
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
