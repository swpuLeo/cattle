# 0561 数组拆分 I


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/array-partition-i/)  [力扣](https://leetcode-cn.com/problems/array-partition-i/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0561-array-partition-i.js)






## 题目描述

给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。


示例:

```
输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
```


注意：

- n 是正整数,范围在 [1, 10000].
- 数组中的元素范围在 [-10000, 10000].



::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/array-partition-i/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  nums.forEach((item, index) => {
    if (index % 2 === 0) res += item;
  });
  return res;
};
```

思路二

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const arr = [];
  const maxValue = 10000;
  nums.forEach(item => {
    if(!arr[item + maxValue]) {
      arr[item + maxValue] = 1;
    } else {
      arr[item + maxValue] += 1;
    }
  });
  let res = 0;
  let n = -maxValue;
  let first = true;
  while (n <= maxValue) {
    if (!arr[n + maxValue]) {
      n += 1;
      continue;
    }
    if (first) {
      res += n;
      first = false;
    } else {
      first = true;
    }
    arr[n + maxValue] -= 1;
  }
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
