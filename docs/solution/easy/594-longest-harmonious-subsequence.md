# 594 最长和谐子序列

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/longest-harmonious-subsequence/)  [力扣](https://leetcode-cn.com/problems/longest-harmonious-subsequence/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/LongestHarmoniousSubsequence.js)

:::



## 题目描述

和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。

现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。

**示例 1:**

```
输入: [1,3,2,2,5,2,3,7]
输出: 5
原因: 最长的和谐数组是：[3,2,2,2,3].
```

**说明:** 输入的数组长度最大不超过20,000.



## 解题思路

思路一：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  // 统计每个数字出现的次数
  const map = new Map();
  nums.forEach(num => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  let sum = 0;
  let tmp = 0;
  [...map.keys()].forEach(key => {
    // 求出当前数字和比它大一的数字出现的次数之和
    if (map.has(key + 1)) {
      tmp = map.get(key) + map.get(key + 1);
    }
    // 找到最大的和
    sum = Math.max(tmp, sum);
  });
  return sum;
};
```





## 相关推荐

我为你挑选的[哈希表](/art/hash.html)题目：
