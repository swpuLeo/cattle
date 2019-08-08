# 0665 非递减数列


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/non-decreasing-array/)  [力扣](https://leetcode-cn.com/problems/non-decreasing-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0665-non-decreasing-array.js)






## 题目描述

给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。


示例 1:

```
输入: [4,2,3]
输出: True
解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
```

示例 2：

```
输入: [4,2,1]
输出: False
解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
```


说明:  n 的范围为 [1, 10,000]。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/non-decreasing-array/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;
  if (nums[0] > nums[1]) {
    // [nums[0], nums[1]] = [nums[1], nums[2]];
    nums[0] = nums[1];
    count += 1;
  }
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count += 1;
      if (count > 1) return false;
      if (nums[i -1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
