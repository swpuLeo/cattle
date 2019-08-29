# 1018 可被 5 整除的二进制前缀


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/binary-prefix-divisible-by-5/)  [力扣](https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/1018-binary-prefix-divisible-by-5.js)






## 题目描述

给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。

返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。



示例 1：

```
输入：[0,1,1]
输出：[true,false,false]
解释：
输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
```

示例 2：

```
输入：[1,1,1]
输出：[false,false,false]
```

示例 3：

```
输入：[0,1,1,1,1,1]
输出：[true,false,false,false,true,false]
```

示例 4：

```
输入：[1,1,1,0,1]
输出：[false,false,false,false,false]
```

提示：

- 1 <= A.length <= 30000
- A[i] 为 0 或 1


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/binary-prefix-divisible-by-5
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let sum = 0;
  const res = [];
  for (let i = 0; i < A.length; i++) {
    sum = (sum * 2 + A[i]) % 5;
    res.push(sum % 5 === 0);
  }
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
