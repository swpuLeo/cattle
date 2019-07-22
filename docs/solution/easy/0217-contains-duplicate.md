# 0217 存在重复元素


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | [哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/contains-duplicate)  [力扣](https://leetcode-cn.com/problems/contains-duplicate)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0217-contains-duplicate.js)






## 题目描述

给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

```
输入: [1,2,3,1]
输出: true
```

示例 2:

```
输入: [1,2,3,4]
输出: false
```

示例 3:

```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/contains-duplicate
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) set.add(nums[i]);
    else return true;
  }
  return false;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
