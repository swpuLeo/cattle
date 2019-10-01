# 0083 删除排序链表中的重复元素


## 题目导航

难度：[简单](/solution/easy/)

分类：[链表](/art/linked-list.html)

来源：[LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)  [力扣](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0083-remove-duplicates-from-sorted-list.js)






## 题目描述

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。


示例 1:

```
输入: 1->1->2
输出: 1->2
```

示例 2:

```
输入: 1->1->2->3->3
输出: 1->2->3
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
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
var deleteDuplicates = function(head) {
  var cur = head;
  if (cur === null) return null;
  while(cur.next) {
    if (cur.next.val === cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
