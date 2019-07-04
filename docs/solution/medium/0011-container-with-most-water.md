# 0011 盛最多水的容器



## 题目导航

难度：[中等](/solution/medium/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/container-with-most-water/)  [力扣](https://leetcode-cn.com/problems/container-with-most-water/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0011-container-with-most-water.js)



## 题目描述

给定 *n* 个非负整数 *a*1，*a*2，...，*a*n，每个数代表坐标中的一个点 (*i*, *ai*) 。在坐标内画 *n* 条垂直线，垂直线 *i* 的两个端点分别为 (*i*, *ai*) 和 (*i*, 0)。找出其中的两条线，使得它们与 *x* 轴共同构成的容器可以容纳最多的水。

**说明：**你不能倾斜容器，且 *n* 的值至少为 2。

![img](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/11-illustration.jpg)

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。



**示例:**

```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/container-with-most-water
:::



## 解题思路

思路一：

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) return 0;
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i < j) {
    let h = Math.min(height[i], height[j]);
    area = Math.max(area, h * (j - i));
    if (height[i] < height[j]) i += 1;
    else j -= 1;
  }
  return area;
};
```



思路二：

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) return 0;
  let area = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 0; j < height.length; j++) {
      area = Math.max(area, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return area;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
