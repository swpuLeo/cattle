# 0485 最大连续 1 的个数


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/max-consecutive-ones/)  [力扣](https://leetcode-cn.com/problems/max-consecutive-ones/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0485-max-consecutive-ones.js)






## 题目描述

给定一个二进制数组， 计算其中最大连续1的个数。


示例:

```
输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
```





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/max-consecutive-ones/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let tmp = 0;
  nums.forEach(item => {
    if (item === 1) tmp += 1;
    else {
      max = Math.max(max, tmp);
      tmp = 0;
    }
  });
  return Math.max(max, tmp);
};
```






## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
