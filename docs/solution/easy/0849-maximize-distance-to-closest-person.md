# 0849 到最近的人的最大距离


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/maximize-distance-to-closest-person/)  [力扣](https://leetcode-cn.com/problems/maximize-distance-to-closest-person/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0849-maximize-distance-to-closest-person.js)






## 题目描述

在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。

至少有一个空座位，且至少有一人坐在座位上。

亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

返回他到离他最近的人的最大距离。


示例 1:

```
输入：[1,0,0,0,1,0,1]
输出：2
解释：
如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
因此，他到离他最近的人的最大距离是 2 。
```

示例 2：

```
输入：[1,0,0,0]
输出：3
解释：
如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
这是可能的最大距离，所以答案是 3 。
```


注意:
- 1 <= seats.length <= 20000
- seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/maximize-distance-to-closest-person/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const length = seats.length;
  const left = [];
  const right= [];
  let dis = length;
  let res = 0;
  for (let i = 0; i < length; i++) {
    if (seats[i] === 1) dis = 0;
    else dis += 1;
    left[i] = dis;
  }
  dis = length;
  for (let i = length - 1; i >= 0; i--) {
    if (seats[i] === 1) dis = 0;
    else dis += 1;
    right[i] = dis;
  }
  for (let i = 0; i < length; i++) {
    if (Math.min(left[i], right[i]) > res) {
      res = Math.min(left[i], right[i]);
    }
  }
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
