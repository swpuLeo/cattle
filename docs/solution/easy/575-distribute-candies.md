# 575 分糖果

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/distribute-candies/)  [力扣](https://leetcode-cn.com/problems/distribute-candies/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/DistributeCandies.js)

:::



## 题目描述

给定一个**偶数**长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。你需要把这些糖果**平均**分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数。

**示例 1:**

```
输入: candies = [1,1,2,2,3,3]
输出: 3
解析: 一共有三种种类的糖果，每一种都有两个。
     最优分配方案：妹妹获得[1,2,3],弟弟也获得[1,2,3]。这样使妹妹获得糖果的种类数最多。
```

**示例 2 :**

```
输入: candies = [1,1,2,3]
输出: 2
解析: 妹妹获得糖果[2,3],弟弟获得糖果[1,1]，妹妹有两种不同的糖果，弟弟只有一种。这样使得妹妹可以获得的糖果种类数最多。
```

**注意:**

1. 数组的长度为[2, 10,000]，并且确定为偶数。
2. 数组中数字的大小在范围[-100,000, 100,000]内。



## 解题思路

思路一：

```js
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  return Math.min(new Set(candies).size, candies.length / 2);
};
```





## 相关推荐

我为你挑选的[哈希表](/art/hash.html)题目：
