# 0509 斐波那契数


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/fibonacci-number/)  [力扣](https://leetcode-cn.com/problems/fibonacci-number/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0509-fibonacci-number.js)






## 题目描述

斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

给定 N，计算 F(N)。


示例 1:

```
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
```

示例 2：

```
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
```

示例 3：

```
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
```


注意: 0 ≤ N ≤ 30


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/fibonacci-number/
:::



## 解题思路


思路一

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) return N;
  return fib(N - 1) + fib(N - 2);
};
```


思路二

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) return N;
  let first = 0;
  let second = 1;
  for (let i = 2; i <= N; i++) {
    [first, second] = [second, first + second];
  }
  return second;
};

```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
