# 0189 旋转数组



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/rotate-array)  [力扣](https://leetcode-cn.com/problems/rotate-array)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0189-rotate-array.js)






## 题目描述

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

```
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```

示例 2:

```
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
```

说明:

- 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
- 要求使用空间复杂度为 O(1) 的 原地 算法。






::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/rotate-array
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverse = (start, end) => {
    while(start < end) {
      const tmp = nums[start];
      nums[start++] = nums[end];
      nums[end--] = tmp;
    }
  }
  if (nums) {
    const last = nums.length - 1;
    k = k % (last + 1);
    reverse(0, last - k);
    reverse(last - k + 1, last);
    reverse(0, last);
  }
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
