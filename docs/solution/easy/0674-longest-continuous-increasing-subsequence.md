# 0674 最长连续递增序列


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)  [力扣](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0674-longest-continuous-increasing-subsequence.js)






## 题目描述

给定一个未经排序的整数数组，找到最长且连续的的递增序列。


示例 1:

```
输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。
```

示例 2：

```
输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
```


注意：数组长度不会超过10000。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length < 1) return 0;
  let max = 1;
  let tmp = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      tmp += 1;
    } else {
      max = Math.max(max, tmp);
      tmp = 1;
    }
  }
  return max = Math.max(max, tmp);
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
