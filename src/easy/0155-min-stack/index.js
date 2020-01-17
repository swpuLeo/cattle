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