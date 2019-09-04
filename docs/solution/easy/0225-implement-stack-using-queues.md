# 0225 用队列实现栈


## 题目导航

难度：[简单](/solution/easy/)

分类：[栈](/art/stack.html)

来源：[LeetCode](https://leetcode.com/problems/implement-stack-using-queues/)  [力扣](https://leetcode-cn.com/problems/implement-stack-using-queues/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0225-implement-stack-using-queues.js)






## 题目描述

使用队列实现栈的下列操作：

- push(x) -- 元素 x 入栈
- pop() -- 移除栈顶元素
- top() -- 获取栈顶元素
- empty() -- 返回栈是否为空


注意:

- 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
- 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
- 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/implement-stack-using-queues
:::



## 解题思路


思路一

```js
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.data = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.data.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.data.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.data[this.data.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.data.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
