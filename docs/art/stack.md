# 栈



大纲：

- 栈的定义与理解（给出示意图）、结合生活中的例子
- 用 JS 模拟一个栈
- 前端中的栈
  - 浏览器前进/后退
  - 函数执行栈
- LeetCode 栈相关的题目
- 相关资源推荐



我们对栈的印象就是

## 使用 JavaScript 模拟栈

```js
class Stack {
  constructor() {
    this.value = []
  }
  push(...args) {
    return this.value.push(...args)
  }
  pop() {
    if (this.isEmpty()) return
    return this.value.pop()
  }
  getTop() {
    if (this.isEmpty()) return
    return this.value[this.value.length - 1]
  }
  isEmpty() {
    return this.value.length === 0
  }
}
```



## 模拟浏览器的前进 / 后退





## 函数执行栈



























