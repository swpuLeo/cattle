# 0066 加一



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/plus-one/)  [力扣](https://leetcode-cn.com/problems/plus-one/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0066-plus-one.js)






## 题目描述

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```


示例 2:

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```




::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/plus-one
:::



## 解题思路

思路一

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length;
  if (!digits) return null;
  if (length < 1) return null;
  if (digits[0] === 0 && length > 1) return null;
  for (let i = length - 1; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] <= 9) return digits;
    else if (digits[i] === 10) digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
  }
  return null;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
