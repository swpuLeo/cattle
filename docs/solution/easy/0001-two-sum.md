# 001 两数之和



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | [哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/two-sum/)  [力扣](https://leetcode-cn.com/problems/two-sum/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/TwoSum.js)  [C++ 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/TwoSum.cpp)  [Python 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/TwoSum.py)






## 题目描述

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那**两个**整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```



:star: **暴力求解**

暴力求解，最直接，但是具有 O(n^2) 的时间复杂度。

```js
// 外层循环保证数组中每个数都能被遍历
for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    // 计算差值 diff
    const diff = target - cur;
    // 内层循环从 i + 1 开始（因为不能重复利用同一个元素）
    // 如果 cur 之后找到一个数 nums[j] 与 diff 相等
    // 直接返回下标（因为只存在一组数之和等于 target）
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === diff) return [i, j];
    }
}
```



⭐️ **哈希表**

本题可以使用哈希表巧妙地将时间复杂度降低为 O(n)。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const diff = target - cur;
    if (map.get(diff) !== undefined) {
      return [map.get(diff), i];
    }
    map.set(cur, i);
  }
};
```



**注：本题已增加 C++ 和 Python 版本的实现**



## 相关推荐

我为你挑选的[数组](/art/array.html)题目：