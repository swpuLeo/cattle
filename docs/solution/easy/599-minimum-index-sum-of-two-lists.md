---
sidebar: auto
---

# 599 两个列表的最小索引和

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/minimum-index-sum-of-two-lists/)  [力扣](https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/MinimumIndexSumOfTwoLists.js)

:::



## 题目描述

假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

你需要帮助他们用**最少的索引和**找出他们**共同喜爱的餐厅**。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。

**示例 1:**

```
输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
输出: ["Shogun"]
解释: 他们唯一共同喜爱的餐厅是“Shogun”。
```

**示例 2:**

```
输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
输出: ["Shogun"]
解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
```

**提示:**

1. 两个列表的长度范围都在 [1, 1000]内。
2. 两个列表中的字符串的长度将在[1，30]的范围内。
3. 下标从0开始，到列表的长度减1。
4. 两个列表都没有重复的元素。



## 解题思路

思路一：

```js
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map();
  if (list1.length > list2.length) [list1, list2] = [list2, list1];
  list1.forEach((list, index) => {
    if (list2.includes(list)) {
      map.set(list, index + list2.indexOf(list));
    }
  });
  const ans = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return ans.map(a => {
    if (a[1] === ans[0][1]) return a[0];
  }).filter(a => a);
};
```



思路二：

```js
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let res = [];
  let index = Infinity;
  list1.forEach((list, i) => {
    if (list2.includes(list)) {
      const j = list2.indexOf(list);
      if (i + j === index) res.push(list);
      else if (i + j < index) {
        index = i + j;
        res = [list];
      }
    }
  });
  return res;
};
```





## 相关推荐

我为你挑选的[哈希表](/art/hash.html)题目：
