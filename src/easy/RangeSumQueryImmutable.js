/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.arr = nums;
  for (let i = 1; i < nums.length; i++) {
    this.arr[i] += nums[i - 1];
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return i === 0 ? this.arr[j] : this.arr[j] - this.arr[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

NumArray.prototype.sumRange = function(i, j) {
  for (let index = i; index <= j; i++) {
    // ...
  }
};