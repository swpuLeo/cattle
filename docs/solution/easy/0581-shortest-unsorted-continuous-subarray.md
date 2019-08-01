# 0581 最短无序连续子数组


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)  [力扣](https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0581-shortest-unsorted-continuous-subarray.js)






## 题目描述

给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。


示例 1:

```
输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```


注意：

- 输入的数组长度范围在 [1, 10,000]。
- 输入的数组可能包含重复元素 ，所以升序的意思是<=。



::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums.length) return 0;
  const tmp = nums.concat().sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < nums.length && nums[left] === tmp[left]) left += 1;
  while (left < right && nums[right] === tmp[right]) right -= 1;
  return right - left + 1;
};
```


思路二

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums.length) return 0;
  let end = -2;
  let start = -1;
  let max = nums[0];
  let min = nums[nums.length - 1];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[nums.length - 1 - i]);
    if (max > nums[i]) end = i;
    if (min < nums[nums.length - 1 - i]) start = nums.length - 1 - i;
  }
  return end - start + 1;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
