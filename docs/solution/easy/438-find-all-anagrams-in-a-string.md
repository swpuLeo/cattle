---
sidebar: auto
---

# 438 找到字符串中所有字母异或词

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[哈希表](/art/hash.html)

来源：[LeetCode](https://leetcode.com/problems/find-all-anagrams-in-a-string/)  [力扣](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/FindAllAnagramsInAString.js)

:::



## 题目描述

给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：字母异位词是指字母相同但字母排序不同的字符串；不考虑答案输出的顺序。

示例如下：

```
示例 1

输入: s: "cbaebabacd" p: "abc"
输出: [0, 6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。


示例 2

输入: s: "abab" p: "ab"
输出: [0, 1, 2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
```



## 解题思路

前面出现过类似题目 LeetCode | 242 有效的字母异位词，这个题在此基础上升级了。前面我们判断过两个字符串是否互为字母异或词，通过借助哈希表统计字符串中字符出现的次数，然后再进行比较每个字符出现的次数是否相等。

本题需要借助滑动窗口的知识。首先构造字符串 p 的哈希表 t1，统计其中字符出现的次数。然后再根据 t1 构造一个哈希表 t2，t2 拥有和 t1 一样的键，但每个值都初始为 0。接着，迭代字符串 s，在 0 ~ p.length - 1 这一段，如果某个字符出现在 t1 中，那么对应 t2 中的值就加一。在 p.length - 1 之后，就有一个长度为 p.length 的滑动窗口，假设滑动窗口最左侧为 left，最后侧为 right。如果 left 字符存在于 t1 中，那么 t2 就对应减一，如果 right 字符存在于 t1 中，那么 t2 字符就对应加一。最后比较 t1 和 t2 是否相等。

上面的思路的时间复杂度为 O(n)。根据提示，本题还可以使用二分查找。如何二分？我们得找中点和 n 的关系。再来看一下硬币的排列：1, 2, 3, 4, ..., k, m(m <= k + 1)，一共 n 个硬币。你会发现这是一个近似的等差数列，并且 n 是等差数列的和。那么这个关系就应该是（假设中点为 mid）：mid * (mid + 1) / 2 与 n 进行比较。

```js
var findAnagrams = function(s, p) {
  const map = {};
  for (let i = 0; i < p.length; i++) {
    const cur = p[i];
    if (map[cur] === undefined) map[cur] = 1;
    else map[cur] += 1;
  }
  let curMap = {};
  for (const key in map) {
    curMap[key] = 0;
  }
  const res = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (i < p.length - 1) {
      map[cur] !== undefined && (curMap[cur] += 1);
      continue;
    }
    const lastChar = s[i - p.length];
    if (map[lastChar] !== undefined) {
      curMap[lastChar] -= 1;
    }
    if (map[cur] !== undefined) {
      curMap[cur] += 1;
    }
    if (JSON.stringify(map) === JSON.stringify(curMap)) {
      res.push(i - p.length + 1);
    }
  }
  return res;
};
```

本题的核心是对滑动窗口的理解，上面的解法用一个哈希表保存着滑动窗口内的字符出现次数，即将离开滑动窗口的字符，对应减一，即将进入滑动窗口的字符，对应加一。在下面的具体实现中，还提供了一种解题方法，供参考。

```js
var findAnagrams = function(s, p) {
  let count = p.length;
  let left = 0, right = 0;
  const res = [];
  const arr = (new Array(26)).fill(0);
  for (const char of p) {
    arr[char.charCodeAt() - 97] += 1;
  }
  while (right < s.length) {
    if (arr[s[right++].charCodeAt() - 97]-- >= 1) count -= 1;
    if (count === 0) res.push(left);
    if (right - left === p.length && arr[s[left++].charCodeAt() - 97]++ >= 0) count += 1;
  }
  return res;
};
```



## 相关推荐

我为你挑选的[哈希表](/art/hash.html)题目：
