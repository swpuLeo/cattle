# 0697 数组的度


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/degree-of-an-array/)  [力扣](https://leetcode-cn.com/problems/degree-of-an-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0697-degree-of-an-array.js)






## 题目描述

给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。


示例 1:

```
输入: [1, 2, 2, 3, 1]
输出: 2
解释:
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
```

示例 2：

```
输入: [1,2,2,3,1,4,2]
输出: 6
```


注意:
- nums.length 在1到50,000区间范围内。
- nums[i] 是一个在0到49,999范围内的整数。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/degree-of-an-array/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const map = {};
  nums.forEach(item => {
    if (!map[item]) map[item] = 1;
    else map[item] += 1;
  });
  let arr = [];
  let max = 1;
  for (let key in map) {
    if (map[key] > max) {
      arr = [];
      arr.push(Number(key));
      max = map[key];
    } else if (map[key] === max) {
      arr.push(Number(key));
    }
  }
  let res = Infinity;
  arr.forEach(item => {
    const first = nums.indexOf(item);
    const last = nums.lastIndexOf(item);
    res = Math.min(res, last - first + 1);
  });
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
