# 0448 找到所有数组中消失的数字


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)  [力扣](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0448-find-all-numbers-disappeared-in-an-array.js)






## 题目描述

给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。


示例:

```
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```





::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const res = [];
  const abs = Math.abs;
  for (let i = 0; i < nums.length; i++) {
    nums[abs(nums[i]) - 1] = -abs(nums[abs(nums[i]) - 1]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
```






## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
