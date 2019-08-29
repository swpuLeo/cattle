# 0989 数组形式的整数加法


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/add-to-array-form-of-integer/)  [力扣](https://leetcode-cn.com/problems/add-to-array-form-of-integer/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0989-add-to-array-form-of-integer.js)






## 题目描述

对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。


示例 1：

```
输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
```

示例 2：
```
输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455

```
示例 3：

```
输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
```

示例 4：

```
输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000
```


提示：

- 1 <= A.length <= 10000
- 0 <= A[i] <= 9
- 0 <= K <= 10000
- 如果 A.length > 1，那么 A[0] != 0


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  const res = [];
  let i = A.length;
  while (--i >= 0 || K > 0) {
    if (i >= 0) K += A[i];
    res.unshift(K % 10);
    K = Math.floor(K / 10);
  }
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
