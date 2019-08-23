# 0905 按奇偶排序数组


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/sort-array-by-parity/)  [力扣](https://leetcode-cn.com/problems/sort-array-by-parity/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0905-sort-array-by-parity.js)






## 题目描述

给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。



示例 1:

```
输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
```


提示：

- 1 <= A.length <= 5000
- 0 <= A[i] <= 5000


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/sort-array-by-parity/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  return A.filter(item => item % 2 === 0).concat(A.filter(item => item % 2 !== 0));
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
