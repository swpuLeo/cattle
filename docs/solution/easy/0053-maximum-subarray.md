# 0053 最大子序和



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 分治算法 | 动态规划

来源：[LeetCode](https://leetcode.com/problems/maximum-subarray/)  [力扣](https://leetcode-cn.com/problems/maximum-subarray/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0053-maximum-subarray.js)






## 题目描述

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。




::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/maximum-subarray
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0];
  let curSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    if (curSum <= 0) curSum = cur;
    else curSum += cur;
    if (sum < curSum) sum = curSum;
  }
  return sum;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
