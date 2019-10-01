# 0234 删除排序链表中的重复元素


## 题目导航

难度：[简单](/solution/easy/)

分类：[链表](/art/linked-list.html)

来源：[LeetCode](https://leetcode.com/problems/palindrome-linked-list/)  [力扣](https://leetcode-cn.com/problems/palindrome-linked-list/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0234-palindrome-linked-list.js)






## 题目描述

请判断一个链表是否为回文链表。


示例 1:

```
输入: 1->2
输出: false
```

示例 2:

```
输入: 1->2->2->1
输出: true
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/palindrome-linked-list
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
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
