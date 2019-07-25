# 0268 缺失数字


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 位运算 | 数学

来源：[LeetCode](https://leetcode.com/problems/missing-number/)  [力扣](https://leetcode-cn.com/problems/missing-number/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0268-missing-number.js)






## 题目描述

给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

```
输入: [3,0,1]
输出: 2
```




示例 2:

```
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```



说明:

你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/missing-number/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map.get(i)) return i;
  }
};
```


思路二

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
  const sum = nums.reduce((prev, next) => prev + next, 0);
  const total = Math.floor((nums.length) * (nums.length + 1) / 2);
  return total - sum;
};
```


思路三

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length;
  let diff = 0;
  for (let i = 0; i < len; i++) {
    diff ^= i;
    diff ^= nums[i];
  }
  // 最后应该再与 len 进行异或运算
  return diff ^ len;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
