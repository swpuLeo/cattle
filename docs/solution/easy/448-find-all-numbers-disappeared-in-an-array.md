# 448 找到数组中所有消失的数字

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)  [力扣](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/FindAllNumbersDisappearedInAnArray.js)

:::



## 题目描述

给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为*O(n)*的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例如下：

```
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```



## 解题思路

![448-illustration](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/448-illustration.png)

题目所说，数字的范围为 [1, n]（n 为数组长度），所以该数组的下标范围应该为 [0, n - 1]。第一个数字为 4，那么它代表的数组下标为 3，我们就找到数组中下标为 3 的数字，对其取相反数。这里，就将 7 改为 -7。以此类推 ... ...

最终我们将得到数组 [-4, -3, -2, -7, 8, 2, -3, -1]。再对该数组进行一次遍历，找出大于 0 的数组项，它们**对应的下标 + 1** 就是缺失的数字。


```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const res = [];
  const abs = Math.abs;
  for (let i = 0; i < nums.length; i++) {
    nums[abs(nums[i]) - 1] = -abs(nums[abs(nums[i]) - 1]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
```



## 相关推荐

我为你挑选的关于[数组](/art/array.html)的题目，有空不妨尝试一下：

- [100]()
- [111]()
