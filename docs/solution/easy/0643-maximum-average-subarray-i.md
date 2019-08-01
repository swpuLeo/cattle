# 643 子数组最大平均数 I


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/maximum-average-subarray-i/)  [力扣](https://leetcode-cn.com/problems/maximum-average-subarray-i/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0643-maximum-average-subarray-i.js)






## 题目描述

给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。


示例 1:

```
输入: [1,12,-5,-6,50,3], k = 4
输出: 12.75
解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```


注意：

- 1 <= k <= n <= 30,000。
- 所给数据范围 [-10,000，10,000]。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/maximum-average-subarray-i/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let tmp = 0;
    for (let j = i; j < i + k; j++) {
      tmp += nums[j];
    }
    max = Math.max(max, tmp / k);
  }
  return max;
};
```


思路二

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;
  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum - nums[i - 1] + nums[i - 1 + k];
    max = Math.max(max, sum);
  }
  return max / k;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
