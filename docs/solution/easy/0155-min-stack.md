# 0155 最小栈


## 题目导航

难度：[简单](/solution/easy/)

分类：[栈](/art/stack.html)

来源：[LeetCode](https://leetcode.com/problems/min-stack/)  [力扣](https://leetcode-cn.com/problems/min-stack/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0155-min-stack.js)






## 题目描述

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) -- 将元素 x 推入栈中。
- pop() -- 删除栈顶的元素。
- top() -- 获取栈顶元素。
- getMin() -- 检索栈中的最小元素。


示例 1:

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/min-stack
:::



## 解题思路


思路一

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = []
  this.minStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let length = this.minStack.length
  this.data.push(x)
  if (!length || x <= this.minStack[length - 1]) this.minStack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.data[this.data.length - 1] === this.minStack[this.minStack.length - 1]) this.minStack.pop()
  this.data.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
