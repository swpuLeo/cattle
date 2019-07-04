# 0026 删除排序数组中的重复项



## 题目导航

难度：[简单](/solution/easy/)  

分类：[数组](/art/array.html) | 双指针

来源：[LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)  [力扣](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0026-remove-duplicates-from-sorted-array.js)





## 题目描述

给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array

:::



## 解题思路



```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const length = nums.length
  let number = 0
  for (let i = 0; i < length; i++) {
    if (nums[i] !== nums[number]) {
      number += 1
      nums[number] = nums[i]
    }
  }
  return number + 1
};
```



## 相关推荐

我为你挑选的[数组](/art/array.html)题目：