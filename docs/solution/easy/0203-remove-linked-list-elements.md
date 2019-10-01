# 0203 删除排序链表中的重复元素


## 题目导航

难度：[简单](/solution/easy/)

分类：[链表](/art/linked-list.html)

来源：[LeetCode](https://leetcode.com/problems/remove-linked-list-elements/)  [力扣](https://leetcode-cn.com/problems/remove-linked-list-elements/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0203-remove-linked-list-elements.js)






## 题目描述

删除链表中等于给定值 val 的所有节点。


示例 1:

```
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/remove-linked-list-elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return null;
  let res = new ListNode(null);
  res.next = head;
  let prev = res;
  let cur = head;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return res.next;
};
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
