# 0414 第三大的数


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/third-maximum-number/)  [力扣](https://leetcode-cn.com/problems/third-maximum-number/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0414-third-maximum-number.js)






## 题目描述

给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

示例 1:

```
输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.
```

示例 2：

```
输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
```

示例 3：

```
输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
```





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/third-maximum-number/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first = nums[0];
  let second = nums[0];
  let third = nums[0];
  nums.forEach(num => {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if ((num !== first) && (num > second || second === first)) {
      third = second;
      second = num;
    } else if ((num !== first && num !== second) && (num > third || third === second || third === first)) {
      third = num;
    }
  });
  return (first > second && second > third)
    ? third : first;
};
```






## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
