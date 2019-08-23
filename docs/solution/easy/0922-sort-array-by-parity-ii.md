# 0922 按奇偶排序数组 II


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode-cn.com/problems/sort-array-by-parity-ii/)  [力扣](https://leetcode-cn.com/problems/sort-array-by-parity-ii/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0922-sort-array-by-parity-ii.js)






## 题目描述

给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。


示例 1:

```
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
```


提示：

- 2 <= A.length <= 20000
- A.length % 2 == 0
- 0 <= A[i] <= 1000


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const odd = A.filter(a => a % 2 !== 0);
  const even = A.filter(a => a % 2 === 0);
  const res = [];
  for (let i = 0; i < odd.length; i++) {
    res.push(even[i], odd[i]);
  }
  return res;
};
```


思路二

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let i = 0;
  let j = 1;
  while (i < A.length && j < A.length) {
    if (A[i] % 2 === 0) {
      i += 2;
    }
    if (A[j] % 2 === 1) {
      j += 2;
    }
    if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      [A[i], A[j]] = [A[j], A[i]];
      i += 2;
      j += 2;
    }
  }
  return A;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
