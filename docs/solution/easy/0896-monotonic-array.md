# 0896 单调数列


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/monotonic-array/)  [力扣](https://leetcode-cn.com/problems/monotonic-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0896-monotonic-array.js)






## 题目描述

如果数组是单调递增或单调递减的，那么它是单调的。

如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

当给定的数组 A 是单调数组时返回 true，否则返回 false。



示例 1:

```
输入：[1,2,2,3]
输出：true
```

示例 2：

```
输入：[6,5,4,4]
输出：true
```

示例 3：

```
输入：[1,3,2]
输出：false
```

示例 4：

```
输入：[1,2,4,5]
输出：true
```

示例 5：

```
输入：[1,1,1]
输出：true
```


提示：

- 1 <= A.length <= 50000
- -100000 <= A[i] <= 100000


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/monotonic-array
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let increase = 0;
  let decrease = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] >= A[i + 1]) decrease += 1;
    if (A[i] <= A[i + 1]) increase += 1;
  }
  if (increase === A.length - 1 || decrease === A.length - 1) return true;
  return false;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
