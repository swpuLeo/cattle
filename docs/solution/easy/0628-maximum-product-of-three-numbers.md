# 628 三个数的最大乘积


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/maximum-product-of-three-numbers/)  [力扣](https://leetcode-cn.com/problems/maximum-product-of-three-numbers/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0628-maximum-product-of-three-numbers.js)






## 题目描述

给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。


示例 1:

```
输入: [1,2,3]
输出: 6
```


示例 2:

```
输入: [1,2,3,4]
输出: 24
```


注意：

- 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
- 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  if (nums[1] < 0) {
    const head = nums[0] * nums[1];
    const tail = nums[nums.length - 2] * nums[nums.length - 3];
    return (head > tail ? head : tail) * nums[nums.length - 1];
  } else {
    return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  }
};
```


思路二

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if (nums.length === 3) return nums[0] * nums[1] * nums[2];
  // 用于保存最大的三个数
  let maxPos = -1;
  let secPos = -1;
  let thirdPos = -1;
  // 用于保存最小的两个数
  let maxNag = 1;
  let secNag = 1;
  for (const num of nums) {
    if (num >= 0) { // 找到最大的三个数
      if (num > maxPos) {
        thirdPos = secPos;
        secPos = maxPos;
        maxPos = num;
        continue;
      } else if (num > secPos) {
        thirdPos = secPos;
        secPos = num;
        continue;
      } else if (num > thirdPos) {
        thirdPos = num;
        continue;
      }
    } else { // 找到最小的两个数
      if (num < maxNag) {
        secNag = maxNag;
        maxNag = num;
        continue;
      } else if (num < secNag) {
        secNag = num;
      }
    }
  }
  if (secNag < 0) {
    const p1 = maxNag * secNag;
    const p2 = secPos * thirdPos;
    return (p1 > p2 ? p1 : p2) * maxPos;
  }
  return maxPos * secPos * thirdPos;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
