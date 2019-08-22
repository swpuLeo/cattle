# 0977 有序数组的平方


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 双指针

来源：[LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/)  [力扣](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0977-squares-of-a-sorted-array.js)






## 题目描述

给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。


示例 1:

```
输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
```

示例 2：

```
输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
```


提示：

- 1 <= A.length <= 10000
- -10000 <= A[i] <= 10000
- A 已按非递减顺序排序


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/fibonacci-number/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(a => a * a).sort((a, b) => a - b);
};
```


思路二

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let left = 0;
  let right = A.length - 1;
  let index = A.length - 1;
  const res = new Array(A.length);
  while (left <= right) {
    if (Math.abs(A[left]) > Math.abs(A[right])) {
      res[index] = A[left] * A[left];
      index -= 1;
      left += 1;
    } else {
      res[index] = A[right] * A[right];
      index -= 1;
      right -= 1;
    }
  }
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
