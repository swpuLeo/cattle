# 0001 两数之和


## 题目描述

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那**两个**整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```


::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/two-sum
:::


## 解题思路


:cow: **思路一 暴力求解**

最直接的思路就是循环 `nums`，从中找出两个整数，两两相加，判断与 `target` 是否相等，相等的话，记录下下标，并返回。这样的话，执行的次数最多为 `n(n - 1)/2`，那么时间复杂度为 `O(n^2)`。


<play-ground source="/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    const diff = target - cur
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === diff) return [i, j]
    }
  }
}

twoSum([3, 2, 5, 7, 11], 9)" />


:cow: **思路二 哈希表** <Badge type="tip" text="推荐" />

这个题目有一个巧妙的地方，在 `nums` 中一定会存在两个数之和等于 `target`。所以，相比于一一枚举，我们可以把当前位置上的整数与 `target` 之差保留下来，存于哈希表中（哈希表的查询时间复杂度为 `O(1)`），当我们继续迭代到某个位置上，而它与 `target` 的差存在于哈希表中，那么这就是我们需要找的两个数。

这个思路的时间复杂度为 `O(n)`，空间复杂度为 `O(n)`。这也是一个典型的以空间换取时间的题目。


<play-ground source="/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    const diff = target - cur
    if (map.get(diff) !== undefined) {
      return [map.get(diff), i]
    }
    map.set(cur, i)
  }
}

twoSum([3, 2, 5, 7, 11], 9)" />


<article-divider />


## 相关推荐

<!-- <recommend-card /> -->

<about-me />

<copyright />
