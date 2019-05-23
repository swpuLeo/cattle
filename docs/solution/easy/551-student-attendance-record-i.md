---
sidebar: auto
---

# 551 学生出勤记录 I

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/student-attendance-record-i/)  [力扣](https://leetcode-cn.com/problems/student-attendance-record-i/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/StudentAttendanceRecordI.js)

:::



## 题目描述

给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：

1. **'A'** : Absent，缺勤
2. **'L'** : Late，迟到
3. **'P'** : Present，到场

如果一个学生的出勤记录中不**超过一个'A'(缺勤)**并且**不超过两个连续的'L'(迟到)**,那么这个学生会被奖赏。

你需要根据这个学生的出勤记录判断他是否会被奖赏。

**示例 1:**

```
输入: "PPALLP"
输出: True
```

**示例 2:**

```
输入: "PPALLL"
输出: False
```



## 解题思路

思路一：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  // 直接统计
  let countA = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') countA += 1;
    if (countA > 1) return false;
    if (s[i - 1] === 'L' && s[i] === 'L' && s[i + 1] === 'L') return false;
  }
  return true;
};
```



思路二：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  // 使用正则表达式
  return (s.match(/A/g) || []).length <= 1
    && (s.match(/L{3}/g) || []).length === 0;
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
