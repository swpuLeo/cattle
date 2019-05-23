---
sidebar: auto
---

# 1010. 总持续时间可被 60 整除的歌曲

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)  [力扣](https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/PairsOfSongsWithTotalDurationsDivisibleBy60.js)

:::



## 题目描述

在歌曲列表中，第 `i` 首歌曲的持续时间为 `time[i]` 秒。

返回其总持续时间（以秒为单位）可被 `60` 整除的歌曲对的数量。形式上，我们希望索引的数字  `i < j` 且有 `(time[i] + time[j]) % 60 == 0`。

 

**示例 1：**

```
输入：[30,20,150,100,40]
输出：3
解释：这三对的总持续时间可被 60 整数：
(time[0] = 30, time[2] = 150): 总持续时间 180
(time[1] = 20, time[3] = 100): 总持续时间 120
(time[1] = 20, time[4] = 40): 总持续时间 60
```

**示例 2：**

```
输入：[60,60,60]
输出：3
解释：所有三对的总持续时间都是 120，可以被 60 整数。
```

 

**提示：**

1. `1 <= time.length <= 60000`
2. `1 <= time[i] <= 500`



## 解题思路

思路一：

```js
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let count = 0;
  const res = Array(60).fill(0);
  for (let t of time) {
    res[t % 60] += 1;
  }
  for (let i = 0; i <= 30; i++) {
    if ((i === 0) || (i === 30) && res[i] > 0) {
      count += (res[i]) * (res[i] - 1) / 2;
      continue;
    }
    if (res[i] > 0 && res[60 - i] > 0) {
      count += res[i] * res[60 - i];
      res[i] = res[60 - i] = 0;
    }
  }
  return count;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
