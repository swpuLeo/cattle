# 0169 求众数



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 位运算 | 分治算法

来源：[LeetCode](https://leetcode.com/problems/majority-element/)  [力扣](https://leetcode-cn.com/problems/majority-element/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0169-majority-element.js)






## 题目描述

给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

```
输入: [3,2,3]
输出: 3
```

示例 2:

```
输入: [2,2,1,1,1,2,2]
输出: 2
```






::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/majority-element/
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1;
  let cur = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (cur === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0) {
      cur = nums[i];
      count = 1;
    }
  }
  return cur;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
