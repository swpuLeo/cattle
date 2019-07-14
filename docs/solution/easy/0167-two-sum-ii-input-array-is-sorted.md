# 0167



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 双指针

来源：[LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)  [力扣](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0167-two-sum-ii-input-array-is-sorted.js)






## 题目描述

给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

- 返回的下标值（index1 和 index2）不是从零开始的。
- 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

示例:

```
输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```






::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    let left = i + 1;
    let right = numbers.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (diff < numbers[mid]) right = mid - 1;
      else if (diff > numbers[mid]) left = mid + 1;
      else {
        result.push(i + 1);
        result.push(mid + 1);
        break;
      }
    }
  }
  return result;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
