# 0016 最接近的三数之和



## 题目导航

难度：[中等](/solution/medium/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/3sum-closest/)  [力扣](https://leetcode-cn.com/problems/3sum-closest/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0016-3sum-cloesst.js)





## 题目描述

给定一个包括 *n* 个整数的数组 `nums` 和 一个目标值 `target`。找出 `nums` 中的三个整数，使得它们的和与 `target` 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

```
例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/3sum-closest/

:::



## 解题思路

思路一：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 先进行排序
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    // 使用双指针
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const cur = nums[i] + nums[left] + nums[right];
      if (Math.abs(cur - target) < Math.abs(closest - target)) {
        closest = cur;
      }
      if (cur < target) left += 1;
      else if (cur > target) right -= 1;
      else return target;
    }
  }
  return closest;
};
```



## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
