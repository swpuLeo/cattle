# 0830 较大分组的位置


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/positions-of-large-groups/)  [力扣](https://leetcode-cn.com/problems/positions-of-large-groups/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0830-positions-of-large-groups.js)






## 题目描述

给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。
在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。

例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。

最终结果按照字典顺序输出。


示例 1:

```
输入: "abbxxxxzzy"
输出: [[3,6]]
解释: "xxxx" 是一个起始于 3 且终止于 6 的较大分组。
```

示例 2：

```
输入: "abc"
输出: []
解释: "a","b" 和 "c" 均不是符合要求的较大分组。
```

示例 3：

```
输入: "abcdddeeeeaabbbcd"
输出: [[3,5],[6,9],[12,14]]
```


注意:
- 1 <= S.length <= 1000


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/positions-of-large-groups/
:::



## 解题思路


思路一

```js
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let left = 0;
  let right = 0;
  const res = [];
  while (right < S.length) {
    if (S[left] === S[right]) {
      right += 1;
    } else {
      if (right - left > 2) {
        res.push([left, right - 1]);
      }
      left = right;
    }
  }
  if ((right === S.length) && (right - left > 2)) {
    res.push([left, right - 1]);
  }
  return res;
};
```

思路二

```js
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  S += 'A';
  let left = 0;
  let right = 0;
  const res = [];
  while (right < S.length) {
    if (S[left] === S[right]) {
      right += 1;
    } else {
      if (right - left > 2) {
        res.push([left, right - 1]);
      }
      left = right;
    }
  }
  return res;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
