# 0119 杨辉三角 II



## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/pascals-triangle-ii/)  [力扣](https://leetcode-cn.com/problems/pascals-triangle-ii/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0119-pascals-triangle-ii.js)






## 题目描述

给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

![](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/0118-illustration.gif)



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

```
输入: 3
输出: [1,3,3,1]
进阶：
```

你可以优化你的算法到 O(k) 空间复杂度吗？




::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/pascals-triangle-ii/
:::



## 解题思路

思路一

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  var res = [[1, 1]];
  for (var i = 1; i < rowIndex; i++) {
    var last = res[res.length - 1];
    var cur = [];
    for (var j = 0; j <= last.length; j++) {
      var lastPre = last[j - 1] ? last[j - 1] : 0;
      var lastNxt = last[j] ? last[j] : 0;
      cur[j] = lastPre + lastNxt;
    }
    res.push(cur);
  }
  return res[rowIndex - 1];
};

```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
