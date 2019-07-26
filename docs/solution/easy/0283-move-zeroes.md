# 0283 移动零


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 双指针

来源：[LeetCode](https://leetcode.com/problems/move-zeroes/)  [力扣](https://leetcode-cn.com/problems/move-zeroes/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0283-move-zeroes.js)






## 题目描述

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例 1:

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```



说明:

- 必须在原数组上操作，不能拷贝额外的数组。
- 尽量减少操作次数。





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/move-zeroes/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};
```


思路二

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
let index = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    nums[index] = nums[i];
    index += 1;
  }
}
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};
```






## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
